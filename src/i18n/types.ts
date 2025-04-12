export type SupportedLanguages = 
  | 'en-US' 
  | 'en-GB' 
  | 'es' 
  | 'fr' 
  | 'de' 
  | 'it' 
  | 'ja' 
  | 'ko' 
  | 'zh'
  | 'ar'
  | 'he'
  | 'fa';

export type LanguageMetadata = {
  [key in SupportedLanguages]: {
    dir: 'ltr' | 'rtl';
    name: string;
  };
};

export type Translation = {
  common: {
    home: string;
    music: string;
    tech: string;
    fashion: string;
    lifestyle: string;
    art: string;
    signIn: string;
    signOut: string;
    settings: string;
    skipToContent: string;
    userMenu: string;
    selectLanguage: string;
    currentLanguage: string;
    search: string;
    newsletter: {
      title: string;
      description: string;
      subscribe: string;
      placeholder: string;
    };
    footer: {
      about: string;
      contact: string;
      privacy: string;
      terms: string;
    };
  };
  pages: {
    home: {
      hero: {
        title: string;
        explore: string;
        shop: string;
      };
      featured: {
        title: string;
        viewAll: string;
      };
    };
  };
}; 