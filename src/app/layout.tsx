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
import { useEffect } from 'react';
import { languageMetadata } from '@/i18n/config';
import { SupportedLanguages } from '@/i18n/types';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JunkBoxx - Tech, Gaming, Music & Urban Culture",
  description: "Your gateway to tech, gaming, music, and urban culture. Discover the latest trends, products, and content.",
  keywords: "tech, gaming, music, fashion, urban culture, lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Set initial language and direction
    const savedLang = localStorage.getItem('preferred-language') as SupportedLanguages || 'en-US';
    const metadata = languageMetadata[savedLang as keyof typeof languageMetadata];
    
    if (metadata) {
      document.documentElement.lang = savedLang;
      document.documentElement.dir = metadata.dir;
    }
  }, []);

  return (
    <html className="scroll-smooth">
      <body className={inter.className}>
        <I18nextProvider i18n={i18n}>
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
        </I18nextProvider>
      </body>
    </html>
  );
}
