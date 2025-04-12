"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Menu } from "lucide-react";
import { useState } from "react";

const categories = [
  { name: "Tech", href: "/tech" },
  { name: "Gaming", href: "/gaming" },
  { name: "Music", href: "/music" },
  { name: "Fashion", href: "/fashion" },
  { name: "Lifestyle", href: "/lifestyle" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
          >
            JunkBoxx
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {category.name}
              </Link>
            ))}
            <Button className="bg-purple-600 hover:bg-purple-700">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden",
            isMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              >
                {category.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 