'use client';

import { useEffect } from 'react';
import { languageMetadata } from '@/i18n/config';
import { SupportedLanguages } from '@/i18n/types';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Set initial language and direction
    const savedLang = localStorage.getItem('preferred-language') as SupportedLanguages || 'en-US';
    const metadata = languageMetadata[savedLang as keyof typeof languageMetadata];
    
    if (metadata) {
      document.documentElement.lang = savedLang;
      document.documentElement.dir = metadata.dir;
    }
  }, []);

  return <>{children}</>;
} 