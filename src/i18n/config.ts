import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageMetadata, SupportedLanguages, Translation } from './types';
import enUS from './locales/en-US';
import es from './locales/es';
import ja from './locales/ja';

// Language metadata including RTL support
export const languageMetadata: LanguageMetadata = {
  'en-US': { dir: 'ltr', name: 'English (US)' },
  'en-GB': { dir: 'ltr', name: 'English (UK)' },
  'es': { dir: 'ltr', name: 'Español' },
  'fr': { dir: 'ltr', name: 'Français' },
  'de': { dir: 'ltr', name: 'Deutsch' },
  'it': { dir: 'ltr', name: 'Italiano' },
  'ja': { dir: 'ltr', name: '日本語' },
  'ko': { dir: 'ltr', name: '한국어' },
  'zh': { dir: 'ltr', name: '中文' },
  'ar': { dir: 'rtl', name: 'العربية' },
  'he': { dir: 'rtl', name: 'עברית' },
  'fa': { dir: 'rtl', name: 'فارسی' },
};

// Create a new i18next instance
const i18n = createInstance();

// Get initial language
const getInitialLanguage = (): SupportedLanguages => {
  if (typeof window === 'undefined') return 'en-US';
  
  const savedLang = localStorage.getItem('preferred-language') as SupportedLanguages;
  if (savedLang && savedLang in languageMetadata) return savedLang;

  const browserLang = navigator.language;
  const supportedLang = Object.keys(languageMetadata).find(
    lang => browserLang.startsWith(lang)
  ) as SupportedLanguages;
  
  return supportedLang || 'en-US';
};

i18n
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en-US',
    supportedLngs: Object.keys(languageMetadata) as SupportedLanguages[],
    defaultNS: 'common',
    lng: getInitialLanguage(),
    interpolation: {
      escapeValue: false,
    },
    resources: {
      'en-US': enUS as Translation,
      'es': es as Translation,
      'ja': ja as Translation,
    },
    react: {
      useSuspense: false,
    },
  })
  .catch(error => {
    console.error('Failed to initialize i18next:', error);
    // Ensure we always have a working instance
    return i18n;
  });

// Add language change handler
i18n.on('languageChanged', (lng: string) => {
  const metadata = languageMetadata[lng as keyof typeof languageMetadata];
  if (metadata) {
    document.documentElement.dir = metadata.dir;
    document.documentElement.lang = lng;
  }
});

export default i18n; 