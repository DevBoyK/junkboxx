'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/providers/auth-provider';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  useEffect(() => {
    const error = searchParams.get('error');
    if (error) {
      console.error('Authentication error:', error);
    }
  }, [searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to JunkBoxx</h1>
          <p className="mt-2 text-muted-foreground">
            Sign in with Spotify to access your music and playlists.
          </p>
        </div>
        <div className="mt-8">
          <Button
            onClick={login}
            className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-white"
          >
            Sign in with Spotify
          </Button>
        </div>
      </div>
    </div>
  );
} 