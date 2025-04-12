// Updated auth implementation using cookies-next for better compatibility
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { spotifyApi } from './spotify';

const TOKEN_COOKIE = 'spotify_token';
const REFRESH_COOKIE = 'spotify_refresh_token';

export async function getAccessToken(code: string) {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI || '',
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get access token');
    }

    const data = await response.json();
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: data.expires_in,
    };
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
}

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