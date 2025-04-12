// Updated auth implementation using cookies-next for better compatibility
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { spotifyApi } from './spotify';

const TOKEN_COOKIE = 'spotify_token';
const REFRESH_COOKIE = 'spotify_refresh_token';

export async function setAuthCookies(accessToken: string, refreshToken: string, expiresIn: number) {
  // Set access token cookie (expires in 1 hour)
  setCookie(TOKEN_COOKIE, accessToken, {
    maxAge: expiresIn,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  // Set refresh token cookie (expires in 30 days)
  setCookie(REFRESH_COOKIE, refreshToken, {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });
}

export async function getAuthCookies() {
  const accessToken = getCookie(TOKEN_COOKIE) as string | undefined;
  const refreshToken = getCookie(REFRESH_COOKIE) as string | undefined;

  return { accessToken, refreshToken };
}

export async function clearAuthCookies() {
  deleteCookie(TOKEN_COOKIE);
  deleteCookie(REFRESH_COOKIE);
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