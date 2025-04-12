"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { safeLocalStorage } from "@/lib/utils";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const storage = safeLocalStorage();

  useEffect(() => {
    setMounted(true);
    const savedPreferences = storage.getItem("cookiePreferences");
    if (!savedPreferences) {
      setShowConsent(true);
    } else {
      try {
        setPreferences(JSON.parse(savedPreferences));
      } catch (error) {
        console.error("Error parsing cookie preferences:", error);
        setShowConsent(true);
      }
    }
  }, [storage]);

  if (!mounted) {
    return null;
  }

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    storage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    setShowConsent(false);
  };

  const handleSavePreferences = () => {
    storage.setItem("cookiePreferences", JSON.stringify(preferences));
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-background p-4 shadow-lg md:p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Cookie Preferences</h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience and analyze our traffic.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <Button
              variant="outline"
              onClick={() => setShowConsent(false)}
            >
              Reject All
            </Button>
            <Button
              variant="outline"
              onClick={handleSavePreferences}
            >
              Save Preferences
            </Button>
            <Button onClick={handleAcceptAll}>Accept All</Button>
          </div>
        </div>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Necessary Cookies</div>
              <div className="text-sm text-muted-foreground">
                Required for the website to function properly.
              </div>
            </div>
            <Button
              variant="ghost"
              className="pointer-events-none opacity-50"
              disabled
            >
              Required
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Analytics Cookies</div>
              <div className="text-sm text-muted-foreground">
                Help us improve our website by collecting usage information.
              </div>
            </div>
            <Button
              variant={preferences.analytics ? "default" : "outline"}
              onClick={() =>
                setPreferences((prev) => ({
                  ...prev,
                  analytics: !prev.analytics,
                }))
              }
            >
              {preferences.analytics ? "Enabled" : "Disabled"}
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Marketing Cookies</div>
              <div className="text-sm text-muted-foreground">
                Allow us to personalize your experience and send you relevant content.
              </div>
            </div>
            <Button
              variant={preferences.marketing ? "default" : "outline"}
              onClick={() =>
                setPreferences((prev) => ({
                  ...prev,
                  marketing: !prev.marketing,
                }))
              }
            >
              {preferences.marketing ? "Enabled" : "Disabled"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 