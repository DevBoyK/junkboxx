'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { safeLocalStorage } from '@/lib/utils';
import { Language } from '@/i18n/types';

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const initialState: LanguageProviderState = {
  language: 'en',
  setLanguage: () => null,
};

const LanguageProviderContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLanguage = 'en',
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [mounted, setMounted] = useState(false);
  const storage = safeLocalStorage();

  useEffect(() => {
    setMounted(true);
    const savedLanguage = storage.getItem('language') as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const value = {
    language,
    setLanguage: (lang: Language) => {
      if (!mounted) return;
      storage.setItem('language', lang);
      setLanguage(lang);
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageProviderContext.Provider value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error('useLanguage must be used within a LanguageProvider');

  return context;
}; 