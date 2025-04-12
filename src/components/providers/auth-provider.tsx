'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { spotifyApi } from '@/lib/spotify';
import { getAuthCookies, refreshAccessToken, clearAuthCookies } from '@/lib/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  user: SpotifyApi.CurrentUsersProfileResponse | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<SpotifyApi.CurrentUsersProfileResponse | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { accessToken, refreshToken } = await getAuthCookies();
        
        if (accessToken) {
          spotifyApi.setAccessToken(accessToken);
          setIsAuthenticated(true);
          await fetchUserProfile();
        } else if (refreshToken) {
          try {
            const newAccessToken = await refreshAccessToken(refreshToken);
            spotifyApi.setAccessToken(newAccessToken);
            setIsAuthenticated(true);
            await fetchUserProfile();
          } catch (error) {
            console.error('Error refreshing token:', error);
            logout();
          }
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        logout();
      }
    };

    checkAuth();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const userData = await spotifyApi.getMe();
      setUser(userData.body);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      logout();
    }
  };

  const login = () => {
    const authUrl = spotifyApi.createAuthorizeURL(
      [
        'user-read-private',
        'user-read-email',
        'user-top-read',
        'playlist-read-private',
        'user-read-playback-state',
        'user-modify-playback-state',
      ],
      'state'
    );
    window.location.href = authUrl;
  };

  const logout = async () => {
    try {
      await clearAuthCookies();
      setIsAuthenticated(false);
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 