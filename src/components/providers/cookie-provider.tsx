'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useLanguage } from './language-provider';

type CookieContextType = {
  showCookieConsent: boolean;
  acceptCookies: () => void;
  rejectCookies: () => void;
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowCookieConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieConsent(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowCookieConsent(false);
  };

  return (
    <CookieContext.Provider
      value={{
        showCookieConsent,
        acceptCookies,
        rejectCookies,
      }}
    >
      {children}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/80">
              {t('cookie.message')}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={rejectCookies}
                className="px-4 py-2 text-sm font-medium text-foreground/60 hover:text-foreground"
              >
                {t('cookie.reject')}
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                {t('cookie.accept')}
              </button>
            </div>
          </div>
        </div>
      )}
    </CookieContext.Provider>
  );
}

export function useCookies() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
} 