"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getAccessToken, setAuthCookies } from "@/lib/auth";
import { Suspense } from "react";

function CallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const error = searchParams.get("error");
    const code = searchParams.get("code");

    if (error) {
      router.push(`/login?error=${error}`);
      return;
    }

    if (code) {
      const handleCallback = async () => {
        try {
          const { accessToken, refreshToken, expiresIn } = await getAccessToken(code);
          await setAuthCookies(accessToken, refreshToken, expiresIn);
          router.push("/");
        } catch (error) {
          console.error("Error handling callback:", error);
          router.push("/login?error=authentication_failed");
        }
      };

      handleCallback();
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Authenticating...</h1>
        <p className="text-gray-400">Please wait while we complete the authentication process.</p>
      </div>
    </div>
  );
}

export default function CallbackPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
          <p className="text-gray-400">Please wait while we process your request.</p>
        </div>
      </div>
    }>
      <CallbackContent />
    </Suspense>
  );
} 