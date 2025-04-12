"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/hooks/use-language";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User, LogOut, Settings, Menu, X, ShoppingCart, Sun, Moon } from "lucide-react";
import { LanguagePicker } from "@/components/ui/language-picker";
import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";

// Define the translation keys type
type TranslationKey = 
  | 'nav.music'
  | 'nav.tech'
  | 'nav.fashion'
  | 'nav.lifestyle'
  | 'nav.art'
  | 'nav.home'
  | 'nav.cart'
  | 'nav.login'
  | 'nav.logout'
  | 'cookie.message'
  | 'cookie.accept'
  | 'cookie.reject'
  | 'articles.category';

type Category = {
  name: TranslationKey;
  href: string;
};

const categories: Category[] = [
  { name: 'nav.music', href: '/music' },
  { name: 'nav.tech', href: '/tech' },
  { name: 'nav.fashion', href: '/fashion' },
  { name: 'nav.lifestyle', href: '/lifestyle' },
  { name: 'nav.art', href: '/art' },
];

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const handleLanguageChange = (newLanguage: 'en' | 'es' | 'fr') => {
    setLanguage(newLanguage);
    // Force a page refresh to apply language changes
    window.location.reload();
  };

  return (
    <header role="banner">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
              JunkBoxx
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === category.href
                      ? 'text-primary'
                      : 'text-foreground/60'
                  }`}
                >
                  {t(`nav.${category.name}`)}
                </Link>
              ))}
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => handleLanguageChange(e.target.value as 'en' | 'es' | 'fr')}
                  className="bg-transparent text-sm text-foreground/60 hover:text-foreground focus:outline-none"
                >
                  <option value="en">EN</option>
                  <option value="es">ES</option>
                  <option value="fr">FR</option>
                </select>
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-foreground/60 hover:text-foreground"
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
                  <Button variant="ghost" size="icon" title={t('nav.cart')}>
                    <ShoppingCart className="h-5 w-5 text-foreground/60" />
                  </Button>
                </Link>
                {user ? (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleLogout}
                    className="text-foreground/60 hover:text-foreground"
                  >
                    {t('nav.logout')}
                  </Button>
                ) : (
                  <Link href="/login">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-foreground/60 hover:text-foreground"
                    >
                      {t('nav.login')}
                    </Button>
                  </Link>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                className="menu-button md:hidden p-2 rounded-md text-foreground/60 hover:text-primary focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    pathname === category.href
                      ? 'text-primary'
                      : 'text-foreground/60'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(category.name)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 