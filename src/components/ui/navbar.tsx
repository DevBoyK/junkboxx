"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/auth-context";
import { useTheme } from "@/contexts/theme-context";
import { Button } from "@/components/ui/button";
import { Sun, Moon, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

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

// Temporary translation function until we implement i18n
const t = (key: TranslationKey) => {
  const translations: Record<TranslationKey, string> = {
    'nav.music': 'Music',
    'nav.tech': 'Tech',
    'nav.fashion': 'Fashion',
    'nav.lifestyle': 'Lifestyle',
    'nav.art': 'Art',
    'nav.home': 'Home',
    'nav.cart': 'Cart',
    'nav.login': 'Login',
    'nav.logout': 'Logout',
    'cookie.message': 'We use cookies to improve your experience.',
    'cookie.accept': 'Accept',
    'cookie.reject': 'Reject',
    'articles.category': 'Category',
  };
  return translations[key] || key;
};

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
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

  return (
    <header role="banner">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/junkboxx_logo_small.png"
                alt="JunkBoxx Logo"
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
                    "text-lg font-semibold transition-all duration-200 hover:text-brand hover:scale-105",
                    pathname === category.href ? "text-brand" : "text-foreground"
                  )}
                >
                  {t(category.name)}
                </Link>
              ))}
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-4">
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

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-4 py-4">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className={cn(
                    "block text-lg font-semibold transition-all duration-200 hover:text-brand hover:scale-105",
                    pathname === category.href ? "text-brand" : "text-foreground"
                  )}
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