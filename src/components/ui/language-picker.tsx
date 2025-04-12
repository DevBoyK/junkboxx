'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { GB, US, ES, FR, DE, IT, JP, KR, CN, SA, IL, IR } from 'country-flag-icons/react/3x2';
import { useTranslation } from 'react-i18next';
import { languageMetadata } from '@/i18n/config';
import { cn } from '@/lib/utils';
import { SupportedLanguages } from '@/i18n/types';

const flagComponents = {
  'en-US': US,
  'en-GB': GB,
  'es': ES,
  'fr': FR,
  'de': DE,
  'it': IT,
  'ja': JP,
  'ko': KR,
  'zh': CN,
  'ar': SA,
  'he': IL,
  'fa': IR,
} as const;

export function LanguagePicker() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<SupportedLanguages>(
    (i18n.language as SupportedLanguages) || 'en-US'
  );

  useEffect(() => {
    // Initial language detection
    if (!localStorage.getItem('preferred-language')) {
      const browserLang = navigator.language;
      const supportedLang = Object.keys(languageMetadata).find(
        lang => browserLang.startsWith(lang)
      ) as SupportedLanguages || 'en-US';
      handleLanguageChange(supportedLang);
      return;
    }

    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language') as SupportedLanguages | null;
    if (savedLang && savedLang !== currentLang && savedLang in languageMetadata) {
      handleLanguageChange(savedLang);
    }

    // Set document direction based on language
    const metadata = languageMetadata[currentLang as keyof typeof languageMetadata];
    if (metadata) {
      document.documentElement.dir = metadata.dir;
      document.documentElement.lang = currentLang;
    }
  }, [currentLang]);

  const handleLanguageChange = async (langCode: SupportedLanguages) => {
    if (!(langCode in languageMetadata)) {
      console.error(`Unsupported language code: ${langCode}`);
      return;
    }

    try {
      setCurrentLang(langCode);
      localStorage.setItem('preferred-language', langCode);
      
      // Change language in i18next
      await i18n.changeLanguage(langCode);
      
      // Update document direction
      const metadata = languageMetadata[langCode as keyof typeof languageMetadata];
      if (metadata) {
        document.documentElement.dir = metadata.dir;
        document.documentElement.lang = langCode;
      }

      // Refresh the page to apply the language change
      router.refresh();
    } catch (error) {
      console.error('Failed to change language:', error);
      // Fallback to English
      handleLanguageChange('en-US');
    }
  };

  const FlagIcon = flagComponents[currentLang as keyof typeof flagComponents] || flagComponents['en-US'];
  const currentMetadata = languageMetadata[currentLang as keyof typeof languageMetadata];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-2"
          aria-label={t('common.selectLanguage')}
        >
          <FlagIcon className="h-4 w-auto" aria-hidden="true" />
          <span className="sr-only">
            {t('common.currentLanguage')}: {currentMetadata?.name}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {(Object.entries(languageMetadata) as [SupportedLanguages, { dir: 'ltr' | 'rtl', name: string }][]).map(([code, { name }]) => {
          const Flag = flagComponents[code as keyof typeof flagComponents];
          return (
            <DropdownMenuItem
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={cn(
                "flex items-center gap-2 cursor-pointer",
                code === currentLang && "bg-accent"
              )}
            >
              <Flag className="h-4 w-auto" aria-hidden="true" />
              <span>{name}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 