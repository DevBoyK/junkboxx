"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Play, ShoppingCart, Star, Headphones, Gamepad, Laptop, Shirt } from "lucide-react";
import { useLanguage } from '@/components/providers/language-provider';

const categories = [
  {
    name: "Tech",
    icon: Laptop,
    description: "Latest gadgets and innovations",
    color: "bg-blue-600",
    href: "/tech"
  },
  {
    name: "Gaming",
    icon: Gamepad,
    description: "Games, consoles, and accessories",
    color: "bg-purple-600",
    href: "/gaming"
  },
  {
    name: "Music",
    icon: Headphones,
    description: "Trending tracks and artists",
    color: "bg-red-600",
    href: "/music"
  },
  {
    name: "Fashion",
    icon: Shirt,
    description: "Urban style and streetwear",
    color: "bg-green-600",
    href: "/fashion"
  }
];

const featuredProducts = [
  {
    title: "PlayStation 5",
    description: "Next-gen gaming console with DualSense controller",
    price: "$499.99",
    category: "Gaming",
    rating: 4.9,
    reviews: 2456,
    bgColor: "bg-blue-600"
  },
  {
    title: "AirPods Pro",
    description: "Active noise cancellation for immersive sound",
    price: "$249.99",
    category: "Tech",
    rating: 4.8,
    reviews: 1832,
    bgColor: "bg-purple-600"
  },
  {
    title: "Gaming Chair",
    description: "Ergonomic design with RGB lighting",
    price: "$299.99",
    category: "Gaming",
    rating: 4.7,
    reviews: 956,
    bgColor: "bg-red-600"
  },
  {
    title: "Mechanical Keyboard",
    description: "RGB backlit mechanical switches",
    price: "$149.99",
    category: "Tech",
    rating: 4.6,
    reviews: 1243,
    bgColor: "bg-green-600"
  }
];

const trendingContent = [
  {
    title: "Drake - For All The Dogs",
    type: "Album",
    description: "Latest album featuring Travis Scott, J. Cole",
    category: "Hip Hop",
    bgColor: "bg-yellow-600",
    stats: "2M+ streams"
  },
  {
    title: "Cyberpunk 2077: Phantom Liberty",
    type: "Game",
    description: "New expansion with Idris Elba",
    category: "Gaming",
    bgColor: "bg-cyan-600",
    stats: "95% positive reviews"
  },
  {
    title: "Smart Home Guide 2024",
    type: "Article",
    description: "Transform your apartment with smart tech",
    category: "Urban Living",
    bgColor: "bg-indigo-600",
    stats: "10k+ reads"
  }
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              {t('home.hero.explore')}
            </Button>
            <Button size="lg" variant="outline">
              <ShoppingCart className="mr-2 h-5 w-5" /> {t('home.hero.shop')}
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Browse Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-xl bg-gray-900 p-6 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${category.color} opacity-10 rounded-full -mr-6 -mt-6`} />
                <category.icon className="h-8 w-8 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400">{category.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.title}
                className="group relative overflow-hidden rounded-xl bg-gray-900 p-6 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className={`absolute top-0 right-0 px-3 py-1 ${product.bgColor} text-white text-sm rounded-bl-lg`}>
                  {product.category}
                </div>
                <div className="h-48 mb-4 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors relative overflow-hidden">
                  <div className={`w-24 h-24 ${product.bgColor} rounded-full opacity-75 group-hover:scale-110 transition-transform`} />
                  <div className={`absolute -right-8 -top-8 w-32 h-32 ${product.bgColor} opacity-10 rounded-full blur-2xl`} />
                  <div className={`absolute -left-8 -bottom-8 w-32 h-32 ${product.bgColor} opacity-10 rounded-full blur-2xl`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-white ml-1">{product.rating}</span>
                  </div>
                  <span className="text-gray-500">({product.reviews})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-white">{product.price}</span>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Content */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingContent.map((content) => (
              <div
                key={content.title}
                className="group relative overflow-hidden rounded-xl bg-gray-800 hover:bg-gray-700 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className={`h-48 ${content.bgColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {content.type === "Album" && (
                      <Play className="h-12 w-12 text-white opacity-75 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <div className={`absolute -right-8 -top-8 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
                  <div className={`absolute -left-8 -bottom-8 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">{content.type}</span>
                    <span className={`px-3 py-1 ${content.bgColor} text-white text-sm rounded-full`}>
                      {content.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{content.title}</h3>
                  <p className="text-gray-400 mb-4">{content.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{content.stats}</span>
                    <Button variant="ghost" className="text-white hover:text-white hover:bg-gray-600">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Stay in the Loop</h2>
          <p className="text-xl text-gray-400 mb-8">
            {t('newsletter.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
            />
            <Button>
              {t('newsletter.subscribe')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 