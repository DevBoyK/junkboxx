"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/auth-context";
import { useTheme } from "@/contexts/theme-context";
import { Button } from "@/components/ui/button";
import { Sun, Moon, ShoppingCart, Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { TranslationKey, supportedLangs } from "@/i18n/config";

type Category = {
  name: TranslationKey;
  href: string;
};

const categories: Category[] = [
  { name: 'nav.music', href: '/music' },
  { name: 'nav.gaming', href: '/gaming' },
  { name: 'nav.tech', href: '/tech' },
  { name: 'nav.fashion', href: '/fashion' },
  { name: 'nav.lifestyle', href: '/lifestyle' },
  { name: 'nav.art', href: '/art' },
];

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const handleLanguageChange = (lang: typeof supportedLangs[number]) => {
    i18n.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  return (
    <header role="banner">
      <a href="#main-content" className="skip-to-content">
        {t('common.skipToContent')}
      </a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/junkboxx_logo_small.png"
                alt={t('nav.home')}
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className={cn(
                    "text-lg font-semibold transition-all duration-200 hover:text-primary hover:scale-105",
                    pathname === category.href ? "text-primary" : "text-foreground"
                  )}
                >
                  {t(category.name)}
                </Link>
              ))}
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-4">
              {/* Language Picker */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="text-foreground hover:text-primary"
                  aria-label={t('nav.selectLanguage')}
                >
                  <Globe className="h-5 w-5" />
                </Button>
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-background border border-border">
                    <div className="py-1">
                      {supportedLangs.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => handleLanguageChange(lang)}
                          className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary"
                        >
                          {t(`nav.language.${lang}`)}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-foreground hover:text-primary"
                aria-label={theme === 'dark' ? t('common.lightMode') : t('common.darkMode')}
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* User Actions */}
              <div className="flex items-center space-x-2">
                <Link href="/cart">
                  <Button variant="ghost" size="icon" title={t('nav.cart')} className="text-foreground hover:text-primary">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                </Link>
                {user ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleLogout}
                    className="text-foreground hover:text-primary"
                  >
                    {t('nav.logout')}
                  </Button>
                ) : (
                  <Link href="/login">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-foreground hover:text-primary"
                    >
                      {t('nav.login')}
                    </Button>
                  </Link>
                )}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? t('common.closeMenu') : t('common.openMenu')}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <div className="container mx-auto px-4 py-4">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className={cn(
                    "block text-lg font-semibold transition-all duration-200 hover:text-primary hover:scale-105 py-2",
                    pathname === category.href ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(category.name)}
                </Link>
              ))}
              {/* Mobile Language Picker */}
              <div className="mt-4">
                <div className="text-lg font-semibold text-foreground mb-2">{t('nav.selectLanguage')}</div>
                <div className="space-y-2">
                  {supportedLangs.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className="block w-full text-left text-lg font-semibold text-foreground hover:text-primary"
                    >
                      {t(`nav.language.${lang}`)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 