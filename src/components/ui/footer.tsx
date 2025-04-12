"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Github } from "lucide-react";

const categories = [
  { name: "Tech", href: "/tech" },
  { name: "Gaming", href: "/gaming" },
  { name: "Music", href: "/music" },
  { name: "Fashion", href: "/fashion" },
  { name: "Lifestyle", href: "/lifestyle" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Press", href: "/press" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Terms", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
  { name: "Cookies", href: "/cookies" },
];

const social = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
            >
              JunkBoxx
            </Link>
            <p className="text-gray-400">
              Your gateway to tech, gaming, music, and urban culture.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} JunkBoxx. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 