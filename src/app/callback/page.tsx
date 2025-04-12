'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getAccessToken } from '@/lib/spotify';
import { setAuthCookies } from '@/lib/auth';
import { useAuth } from '@/components/providers/auth-provider';

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      router.push(`/login?error=${error}`);
      return;
    }

    if (code) {
      const handleCallback = async () => {
        try {
          const { accessToken, refreshToken, expiresIn } = await getAccessToken(code);
          await setAuthCookies(accessToken, refreshToken, expiresIn);
          router.push('/');
        } catch (error) {
          console.error('Error handling callback:', error);
          router.push('/login?error=authentication_failed');
        }
      };

      handleCallback();
    }
  }, [searchParams, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Authenticating with Spotify...</h1>
        <p className="text-muted-foreground">Please wait while we complete the authentication process.</p>
      </div>
    </div>
  );
} 