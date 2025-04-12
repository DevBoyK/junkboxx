'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import { LanguageProvider } from '@/components/providers/language-provider';
import { AuthProvider } from '@/components/providers/auth-provider';
import { ErrorBoundary } from '@/components/providers/error-boundary';
import { CookieProvider } from '@/components/providers/cookie-provider';

export function RootProviders({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <AuthProvider>
          <CookieProvider>
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </CookieProvider>
        </AuthProvider>
      </LanguageProvider>
    </I18nextProvider>
  );
} 