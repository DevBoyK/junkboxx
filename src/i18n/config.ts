import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
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

// Define supported languages
export const supportedLangs = ['en', 'es', 'fr'] as const;
export type SupportedLang = typeof supportedLangs[number];

// Define translation namespace types
export const namespaces = [
  'common',
  'nav',
  'auth',
  'home',
  'products',
  'cart',
  'profile'
] as const;
export type Namespace = typeof namespaces[number];

// Define translation key types
export type TranslationKey = 
  | `nav.${string}`
  | `auth.${string}`
  | `home.${string}`
  | `products.${string}`
  | `cart.${string}`
  | `profile.${string}`
  | `common.${string}`;

// Create a new i18next instance
const i18nInstance = i18n;

i18nInstance
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: supportedLangs,
    ns: namespaces,
    defaultNS: 'common',
    fallbackNS: 'common',
    load: 'languageOnly', // Only load language without region
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Add language change handler
i18nInstance.on('languageChanged', (lng: string) => {
  const metadata = languageMetadata[lng as keyof typeof languageMetadata];
  if (metadata) {
    document.documentElement.dir = metadata.dir;
    document.documentElement.lang = lng;
  }
});

// Validation function for translation keys
export function isValidTranslationKey(key: string): key is TranslationKey {
  return namespaces.some(ns => key.startsWith(`${ns}.`));
}

// Helper function to get translation with type checking
export function t(key: TranslationKey, options?: Record<string, unknown>): string {
  if (!isValidTranslationKey(key)) {
    console.warn(`Invalid translation key: ${key}`);
    return key;
  }
  return i18nInstance.t(key, options);
}

export default i18nInstance; 