"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/providers/auth-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User, LogOut, Settings } from "lucide-react";
import { LanguagePicker } from "@/components/ui/language-picker";

const categories = [
  { name: "Music", href: "/music" },
  { name: "Tech", href: "/tech" },
  { name: "Fashion", href: "/fashion" },
  { name: "Lifestyle", href: "/lifestyle" },
  { name: "Art", href: "/art" },
];

export function Navbar() {
  const pathname = usePathname();
  const { isAuthenticated, user, login, logout } = useAuth();

  return (
    <header role="banner">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-xl font-bold text-primary hover:text-primary/90"
              aria-label="JunkBoxx Home"
            >
              JunkBoxx
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8" role="menubar">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                    pathname === category.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                  role="menuitem"
                  aria-current={pathname === category.href ? "page" : undefined}
                >
                  {category.name}
                </Link>
              ))}
            </div>

            {/* User Actions and Language Picker */}
            <div className="flex items-center space-x-4">
              <LanguagePicker />
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="relative h-8 w-8 rounded-full"
                      aria-label="Open user menu"
                    >
                      {user?.images?.[0]?.url ? (
                        <img
                          src={user.images[0].url}
                          alt={user.display_name || 'User avatar'}
                          className="h-8 w-8 rounded-full"
                        />
                      ) : (
                        <User className="h-5 w-5" aria-hidden="true" />
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/settings" className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={logout} 
                      className="flex items-center"
                      aria-label="Log out"
                    >
                      <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button 
                  onClick={login} 
                  variant="outline"
                  aria-label="Sign in to your account"
                >
                  Sign in
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 