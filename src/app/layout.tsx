'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { AuthProvider } from '@/components/providers/auth-provider';
import { ErrorBoundary } from '@/components/providers/error-boundary';
import { CookieConsent } from "@/components/ui/cookie-consent";
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import { LanguageProvider } from '@/components/providers/language-provider';
import { metadata } from './metadata';

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body className={inter.className}>
        <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            <AuthProvider>
              <ErrorBoundary>
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main id="main-content" className="flex-grow pt-16">{children}</main>
                  <Footer />
                  <CookieConsent />
                </div>
              </ErrorBoundary>
            </AuthProvider>
          </LanguageProvider>
        </I18nextProvider>
      </body>
    </html>
  );
}
