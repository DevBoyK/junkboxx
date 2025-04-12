import { cookies } from 'next/headers';
import { spotifyApi } from './spotify';

const TOKEN_COOKIE = 'spotify_token';
const REFRESH_COOKIE = 'spotify_refresh_token';

export async function setAuthCookies(accessToken: string, refreshToken: string, expiresIn: number) {
  const cookieStore = cookies();
  
  // Set access token cookie (expires in 1 hour)
  cookieStore.set(TOKEN_COOKIE, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: expiresIn,
  });

  // Set refresh token cookie (expires in 30 days)
  cookieStore.set(REFRESH_COOKIE, refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });
}

export async function getAuthCookies() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(TOKEN_COOKIE)?.value;
  const refreshToken = cookieStore.get(REFRESH_COOKIE)?.value;
  
  return { accessToken, refreshToken };
}

export async function clearAuthCookies() {
  const cookieStore = cookies();
  cookieStore.delete(TOKEN_COOKIE);
  cookieStore.delete(REFRESH_COOKIE);
}

export async function refreshAccessToken(refreshToken: string) {
  try {
    spotifyApi.setRefreshToken(refreshToken);
    const data = await spotifyApi.refreshAccessToken();
    const { access_token, expires_in } = data.body;
    
    await setAuthCookies(access_token, refreshToken, expires_in);
    return access_token;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
} 