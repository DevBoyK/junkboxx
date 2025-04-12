'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import { LanguageProvider } from '@/components/providers/language-provider';
import { AuthProvider } from '@/components/providers/auth-provider';
import { ErrorBoundary } from '@/components/providers/error-boundary';

export function RootProviders({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <AuthProvider>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </AuthProvider>
      </LanguageProvider>
    </I18nextProvider>
  );
} 