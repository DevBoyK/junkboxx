"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { Loader2 } from "lucide-react";

export default function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function handleCallback() {
      try {
        const code = searchParams.get("code");
        const state = searchParams.get("state");

        if (code && state) {
          await login({ code, state });
          router.push("/");
        } else {
          throw new Error("Missing code or state parameter");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Authentication failed");
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      }
    }

    handleCallback();
  }, [router, searchParams, login]);

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-destructive">{error}</div>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => router.push("/login")}
        >
          Back to Login
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <p className="mt-4 text-muted-foreground">Connecting to Spotify...</p>
    </div>
  );
} 