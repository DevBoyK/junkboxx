"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const error = searchParams.get("error");
    if (error) {
      console.error("Login error:", error);
    }
  }, [searchParams]);

  const handleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
    const scope = "user-read-email user-read-private playlist-read-private playlist-read-collaborative";
    
    if (!clientId || !redirectUri) {
      console.error("Missing Spotify credentials");
      return;
    }

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;
    window.location.href = authUrl;
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to JunkBoxx</h1>
          <p className="mt-2 text-gray-400">Sign in with your Spotify account to continue</p>
        </div>
        <div className="mt-8">
          <Button
            onClick={handleLogin}
            className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-white"
          >
            Sign in with Spotify
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
          <p className="text-gray-400">Please wait while we prepare the login page.</p>
        </div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  );
} 