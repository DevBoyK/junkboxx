'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'en' | 'es' | 'fr';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    nav: {
      music: 'Music',
      tech: 'Tech',
      fashion: 'Fashion',
      lifestyle: 'Lifestyle',
      art: 'Art',
      home: 'Home',
      cart: 'Cart',
      login: 'Login',
      logout: 'Logout',
    },
    cookie: {
      message: 'We use cookies to improve your experience.',
      accept: 'Accept',
      reject: 'Reject',
    },
    articles: {
      category: 'Category',
      readMore: 'Read More',
    },
  },
  es: {
    nav: {
      music: 'Música',
      tech: 'Tecnología',
      fashion: 'Moda',
      lifestyle: 'Estilo de Vida',
      art: 'Arte',
      home: 'Inicio',
      cart: 'Carrito',
      login: 'Iniciar Sesión',
      logout: 'Cerrar Sesión',
    },
    cookie: {
      message: 'Usamos cookies para mejorar tu experiencia.',
      accept: 'Aceptar',
      reject: 'Rechazar',
    },
    articles: {
      category: 'Categoría',
      readMore: 'Leer Más',
    },
  },
  fr: {
    nav: {
      music: 'Musique',
      tech: 'Technologie',
      fashion: 'Mode',
      lifestyle: 'Style de Vie',
      art: 'Art',
      home: 'Accueil',
      cart: 'Panier',
      login: 'Connexion',
      logout: 'Déconnexion',
    },
    cookie: {
      message: 'Nous utilisons des cookies pour améliorer votre expérience.',
      accept: 'Accepter',
      reject: 'Rejeter',
    },
    articles: {
      category: 'Catégorie',
      readMore: 'Lire Plus',
    },
  },
};

export const useLanguage = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (lang: Language) => set({ language: lang }),
      t: (key: string) => {
        const lang = get().language;
        const keys = key.split('.');
        let value: any = translations[lang];
        for (const k of keys) {
          value = value?.[k];
        }
        return value || key;
      },
    }),
    {
      name: 'language-storage',
    }
  )
); 