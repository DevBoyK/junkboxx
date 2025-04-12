'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtVerify } from 'jose';

interface AdminContextType {
  isAdmin: boolean;
  isLoading: boolean;
  error: string | null;
  csrfToken: string | null;
}

const AdminContext = createContext<AdminContextType>({
  isAdmin: false,
  isLoading: true,
  error: null,
  csrfToken: null,
});

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        // Check if admin credentials are configured
        if (!process.env.NEXT_PUBLIC_ADMIN_ENABLED) {
          setError('Admin system not properly configured');
          setIsLoading(false);
          return;
        }

        // Get session token and CSRF token from cookies
        const sessionToken = document.cookie
          .split('; ')
          .find(row => row.startsWith('admin_session='))
          ?.split('=')[1];

        const csrfToken = document.cookie
          .split('; ')
          .find(row => row.startsWith('csrf_token='))
          ?.split('=')[1];

        if (sessionToken && csrfToken) {
          try {
            // Verify JWT token
            const secret = new TextEncoder().encode(process.env.JWT_SECRET || '');
            const { payload } = await jwtVerify(sessionToken, secret);
            
            if (payload.role === 'admin') {
              setIsAdmin(true);
              setCsrfToken(csrfToken);
            } else {
              throw new Error('Invalid admin role');
            }
          } catch (err) {
            console.error('Token verification failed:', err);
            setIsAdmin(false);
            setCsrfToken(null);
            // Clear invalid cookies
            document.cookie = 'admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            document.cookie = 'csrf_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
            if (!window.location.pathname.includes('/admin/login')) {
              router.push('/admin/login');
            }
          }
        } else {
          setIsAdmin(false);
          setCsrfToken(null);
          if (!window.location.pathname.includes('/admin/login')) {
            router.push('/admin/login');
          }
        }
      } catch (err) {
        console.error('Error checking admin status:', err);
        setError('An error occurred while checking admin status');
      } finally {
        setIsLoading(false);
      }
    };

    checkAdminStatus();
  }, [router]);

  return (
    <AdminContext.Provider value={{ isAdmin, isLoading, error, csrfToken }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
} 