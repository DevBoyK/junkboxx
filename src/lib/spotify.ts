import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
  'user-read-private',
  'user-read-email',
  'user-top-read',
  'playlist-read-private',
  'playlist-read-collaborative',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-follow-read',
  'user-library-read',
];

const params = {
  scope: scopes.join(','),
};

const queryParamString = new URLSearchParams(params);

export const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI,
});

export const getAccessToken = async (code: string) => {
  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    return {
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    };
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

export const refreshAccessToken = async (refreshToken: string) => {
  try {
    spotifyApi.setRefreshToken(refreshToken);
    const data = await spotifyApi.refreshAccessToken();
    return {
      accessToken: data.body.access_token,
      expiresIn: data.body.expires_in,
    };
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};

export async function getCurrentUser() {
  try {
    const data = await spotifyApi.getMe();
    return data.body;
  } catch (error) {
    console.error('Error getting current user:', error);
    throw error;
  }
}

export async function getFeaturedPlaylists() {
  try {
    const data = await spotifyApi.getFeaturedPlaylists({
      limit: 10,
      country: 'US',
    });
    return data.body.playlists.items;
  } catch (error) {
    console.error('Error getting featured playlists:', error);
    throw error;
  }
}

export async function getPlaylistTracks(playlistId: string) {
  try {
    const data = await spotifyApi.getPlaylistTracks(playlistId);
    return data.body.items;
  } catch (error) {
    console.error('Error getting playlist tracks:', error);
    throw error;
  }
} 