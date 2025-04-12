import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

// Get admin credentials from environment variables
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomUUID();

// Simple in-memory rate limiting
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>();
const MAX_ATTEMPTS = 5;
const ATTEMPT_WINDOW = 15 * 60 * 1000; // 15 minutes

// Check if admin credentials are properly configured
if (!ADMIN_USERNAME || !ADMIN_PASSWORD_HASH) {
  console.error('Admin credentials not properly configured in environment variables');
}

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    // Check if credentials are configured
    if (!ADMIN_USERNAME || !ADMIN_PASSWORD_HASH) {
      return NextResponse.json(
        { message: 'Admin system not properly configured' },
        { status: 500 }
      );
    }

    // Rate limiting
    const now = Date.now();
    const attempts = loginAttempts.get(ip) || { count: 0, lastAttempt: 0 };
    
    if (attempts.count >= MAX_ATTEMPTS && now - attempts.lastAttempt < ATTEMPT_WINDOW) {
      return NextResponse.json(
        { message: 'Too many login attempts. Please try again later.' },
        { status: 429 }
      );
    }

    // Verify credentials
    if (username !== ADMIN_USERNAME) {
      loginAttempts.set(ip, { count: attempts.count + 1, lastAttempt: now });
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
    if (!isValidPassword) {
      loginAttempts.set(ip, { count: attempts.count + 1, lastAttempt: now });
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = await new SignJWT({ role: 'admin' })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(new TextEncoder().encode(JWT_SECRET));

    // Set secure cookies
    const cookieStore = cookies();
    
    // Session cookie
    cookieStore.set('admin_session', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60, // 1 hour
    });

    // CSRF token cookie
    const csrfToken = crypto.randomUUID();
    cookieStore.set('csrf_token', csrfToken, {
      httpOnly: false,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60, // 1 hour
    });

    // Reset login attempts on successful login
    loginAttempts.delete(ip);

    return NextResponse.json({ 
      success: true,
      csrfToken 
    });
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json(
      { message: 'An error occurred during login' },
      { status: 500 }
    );
  }
} 