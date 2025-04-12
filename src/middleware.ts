import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAuthCookies } from '@/lib/auth';
import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth } from 'next-auth/middleware';

// Add paths that don't require authentication
const publicPaths = [
  '/',
  '/login',
  '/callback',
  '/api/auth',
  '/tech',
  '/music',
  '/fashion',
  '/lifestyle',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
];

// Add paths that require authentication
const protectedPaths = [
  '/profile',
  '/settings',
  '/checkout',
  '/orders',
];

// List of admin email addresses (should be moved to environment variables)
const ADMIN_EMAILS = process.env.ADMIN_EMAILS?.split(',') || [];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path is public
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check if the path requires authentication
  if (protectedPaths.some(path => pathname.startsWith(path))) {
    try {
      const { accessToken, refreshToken } = await getAuthCookies();

      // If no tokens are present, redirect to login
      if (!accessToken && !refreshToken) {
        const url = new URL('/login', request.url);
        url.searchParams.set('from', pathname);
        return NextResponse.redirect(url);
      }

      return NextResponse.next();
    } catch (error) {
      console.error('Middleware error:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // For all other paths, allow access
  return NextResponse.next();
}

export async function middlewareAdmin(request: NextRequestWithAuth) {
  const token = await getToken({ req: request });
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');

  // If trying to access admin routes
  if (isAdminRoute) {
    // If not authenticated, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // If authenticated but not admin, redirect to home
    if (!ADMIN_EMAILS.includes(token.email as string)) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
    '/admin/:path*',
    '/api/admin/:path*',
  ],
}; 