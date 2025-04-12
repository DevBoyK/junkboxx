"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageCard } from "@/components/ui/image-card-new";
import { ArrowRight } from "lucide-react";

const featuredArticles = [
  {
    title: "Urban Living Guide",
    description: "Modern solutions for city dwellers",
    image: "/images/lifestyle/urban-living.jpg",
    category: "Living",
  },
  {
    title: "Wellness Trends",
    description: "Stay healthy and balanced in 2024",
    image: "/images/lifestyle/wellness.jpg",
    category: "Health",
  },
  {
    title: "Travel Destinations",
    description: "Must-visit places this season",
    image: "/images/lifestyle/travel.jpg",
    category: "Travel",
  },
];

const featuredProducts = [
  {
    title: "Smart Home Kit",
    description: "Transform your living space",
    image: "/images/lifestyle/smart-home.jpg",
    price: "$299",
  },
  {
    title: "Wellness Package",
    description: "Complete wellness solution",
    image: "/images/lifestyle/wellness-package.jpg",
    price: "$199",
  },
];

export default function LifestylePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/lifestyle/hero-poster.jpg"
        >
          <source src="/videos/lifestyle-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-white mb-6">Lifestyle</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover the latest trends in urban living, wellness, and modern lifestyle. Your guide to living better.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <ImageCard
              key={article.title}
              src={article.image}
              alt={article.title}
              className="aspect-[4/3]"
            >
              <div className="text-white">
                <span className="inline-block px-2 py-1 bg-primary rounded text-sm mb-2">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-white/90">{article.description}</p>
              </div>
            </ImageCard>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product) => (
              <ImageCard
                key={product.title}
                src={product.image}
                alt={product.title}
                className="aspect-[16/9]"
              >
                <div className="text-white">
                  <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-white/90 mb-2">{product.description}</p>
                  <p className="text-xl font-bold">{product.price}</p>
                </div>
              </ImageCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest lifestyle trends and updates.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" />
            <Button>
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 