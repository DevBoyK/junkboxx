'use client';

import { useLanguage } from '@/components/providers/language-provider';
import { Language } from '@/i18n/types';
import { safeLocalStorage } from '@/lib/utils';
import { Globe } from 'lucide-react';
import { useCallback } from 'react';

export function LanguagePicker() {
  const { language, setLanguage } = useLanguage();
  const storage = safeLocalStorage();

  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang);
    storage.setItem('language', lang);
  }, [setLanguage, storage]);

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value as Language)}
        className="appearance-none bg-transparent border-none text-foreground cursor-pointer pr-8 focus:outline-none"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
      <Globe className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground" />
    </div>
  );
} 