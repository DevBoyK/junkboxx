'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { safeLocalStorage } from '@/lib/utils';

type AuthContextType = {
  isAuthenticated: boolean;
  user: any | null;
  login: (userData: any) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const [mounted, setMounted] = useState(false);
  const storage = safeLocalStorage();

  useEffect(() => {
    setMounted(true);
    // Only run on client side
    const savedUser = storage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData: any) => {
    if (!mounted) return;
    setUser(userData);
    setIsAuthenticated(true);
    storage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    if (!mounted) return;
    setUser(null);
    setIsAuthenticated(false);
    storage.removeItem('user');
  };

  if (!mounted) {
    return null; // Don't render anything during SSR
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 