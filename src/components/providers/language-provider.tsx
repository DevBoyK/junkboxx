'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { safeLocalStorage } from '@/lib/utils';

type Language = 'en' | 'es' | 'fr';
type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: typeof translations;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.music': 'Music',
    'nav.tech': 'Tech',
    'nav.fashion': 'Fashion',
    'nav.lifestyle': 'Lifestyle',
    'nav.art': 'Art',
    'nav.cart': 'Cart',
    'nav.login': 'Login',
    'nav.logout': 'Logout',
    
    // Cookie Consent
    'cookie.message': 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
    'cookie.accept': 'Accept',
    'cookie.reject': 'Reject',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.retry': 'Retry',
    
    // Home Page
    'home.hero.title': 'Welcome to JunkBoxx',
    'home.hero.subtitle': 'Discover the latest in tech, music, fashion, and more',
    'home.hero.explore': 'Explore Now',
    'home.hero.shop': 'Shop Products',
    
    // Newsletter
    'newsletter.title': 'Stay Updated',
    'newsletter.subtitle': 'Subscribe to our newsletter for the latest updates',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.subscribe': 'Subscribe',
    
    // Products
    'products.featured': 'Featured Products',
    'products.viewAll': 'View All Products',
    'products.price': 'Price',
    'products.addToCart': 'Add to Cart',
    
    // Articles
    'articles.featured': 'Featured Articles',
    'articles.readMore': 'Read More',
    'articles.category': 'Category',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.music': 'Música',
    'nav.tech': 'Tecnología',
    'nav.fashion': 'Moda',
    'nav.lifestyle': 'Estilo de Vida',
    'nav.art': 'Arte',
    'nav.cart': 'Carrito',
    'nav.login': 'Iniciar Sesión',
    'nav.logout': 'Cerrar Sesión',
    
    // Cookie Consent
    'cookie.message': 'Utilizamos cookies para mejorar su experiencia. Al continuar visitando este sitio, acepta nuestro uso de cookies.',
    'cookie.accept': 'Aceptar',
    'cookie.reject': 'Rechazar',
    
    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Ocurrió un error',
    'common.retry': 'Reintentar',
    
    // Home Page
    'home.hero.title': 'Bienvenido a JunkBoxx',
    'home.hero.subtitle': 'Descubre lo último en tecnología, música, moda y más',
    'home.hero.explore': 'Explorar Ahora',
    'home.hero.shop': 'Comprar Productos',
    
    // Newsletter
    'newsletter.title': 'Mantente Actualizado',
    'newsletter.subtitle': 'Suscríbete a nuestro boletín para las últimas actualizaciones',
    'newsletter.placeholder': 'Ingresa tu correo',
    'newsletter.subscribe': 'Suscribirse',
    
    // Products
    'products.featured': 'Productos Destacados',
    'products.viewAll': 'Ver Todos los Productos',
    'products.price': 'Precio',
    'products.addToCart': 'Agregar al Carrito',
    
    // Articles
    'articles.featured': 'Artículos Destacados',
    'articles.readMore': 'Leer Más',
    'articles.category': 'Categoría',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.music': 'Musique',
    'nav.tech': 'Technologie',
    'nav.fashion': 'Mode',
    'nav.lifestyle': 'Style de Vie',
    'nav.art': 'Art',
    'nav.cart': 'Panier',
    'nav.login': 'Connexion',
    'nav.logout': 'Déconnexion',
    
    // Cookie Consent
    'cookie.message': 'Nous utilisons des cookies pour améliorer votre expérience. En continuant à visiter ce site, vous acceptez notre utilisation des cookies.',
    'cookie.accept': 'Accepter',
    'cookie.reject': 'Refuser',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur est survenue',
    'common.retry': 'Réessayer',
    
    // Home Page
    'home.hero.title': 'Bienvenue sur JunkBoxx',
    'home.hero.subtitle': 'Découvrez les dernières nouveautés en technologie, musique, mode et plus encore',
    'home.hero.explore': 'Explorer',
    'home.hero.shop': 'Acheter des Produits',
    
    // Newsletter
    'newsletter.title': 'Restez Informé',
    'newsletter.subtitle': 'Abonnez-vous à notre newsletter pour les dernières mises à jour',
    'newsletter.placeholder': 'Entrez votre email',
    'newsletter.subscribe': "S'abonner",
    
    // Products
    'products.featured': 'Produits en Vedette',
    'products.viewAll': 'Voir Tous les Produits',
    'products.price': 'Prix',
    'products.addToCart': 'Ajouter au Panier',
    
    // Articles
    'articles.featured': 'Articles en Vedette',
    'articles.readMore': 'Lire la Suite',
    'articles.category': 'Catégorie',
  },
} as const;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const storage = safeLocalStorage();

  useEffect(() => {
    // Only run on client side
    const savedLanguage = storage.getItem('language') as Language | null;
    if (savedLanguage && ['en', 'es', 'fr'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    storage.setItem('language', lang);
  };

  const t = (key: TranslationKey) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 