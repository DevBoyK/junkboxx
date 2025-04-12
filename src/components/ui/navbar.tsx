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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
          >
            JunkBoxx
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-white',
                  pathname === category.href
                    ? 'text-white'
                    : 'text-gray-400'
                )}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-white/10">
                    {user?.images?.[0]?.url ? (
                      <img
                        src={user.images[0].url}
                        alt={user.display_name || 'User avatar'}
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <User className="h-5 w-5 text-white" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-black/90 border-white/10">
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="flex items-center text-white hover:bg-white/10">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout} className="flex items-center text-white hover:bg-white/10">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={login} variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Sign in
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 