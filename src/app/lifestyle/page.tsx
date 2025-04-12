"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageCard } from "@/components/ui/image-card";
import { ArrowRight } from "lucide-react";

const featuredArticles = [
  {
    title: "Urban Living Guide",
    category: "Living",
    image: "/images/lifestyle/urban-living.jpg",
    author: "Sarah Chen",
    date: "Feb 15, 2024"
  },
  {
    title: "Wellness Trends",
    category: "Health",
    image: "/images/lifestyle/wellness.jpg",
    author: "Michael Park",
    date: "Feb 12, 2024"
  },
  {
    title: "Travel Destinations",
    category: "Travel",
    image: "/images/lifestyle/travel.jpg",
    author: "Emma Wilson",
    date: "Feb 10, 2024"
  }
];

const featuredProducts = [
  {
    title: "Smart Home Kit",
    category: "Home",
    image: "/images/lifestyle/smart-home.jpg",
    price: "$299",
    description: "Transform your living space"
  },
  {
    title: "Wellness Package",
    category: "Health",
    image: "/images/lifestyle/wellness-package.jpg",
    price: "$199",
    description: "Complete wellness solution"
  }
];

export default function LifestylePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/lifestyle-hero.mp4"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Lifestyle</h1>
          <p className="max-w-2xl text-lg">
            Discover tips and inspiration for modern living. From wellness to travel, find your perfect lifestyle balance.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Featured Articles</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <ImageCard
              key={article.title}
              src={article.image}
              alt={article.title}
              className="aspect-[4/5]"
            >
              <div className="space-y-2 text-white">
                <span className="inline-block rounded bg-primary px-2 py-1 text-xs">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="text-sm">By {article.author}</p>
                <p className="text-sm text-gray-300">{article.date}</p>
              </div>
            </ImageCard>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredProducts.map((product) => (
              <ImageCard
                key={product.title}
                src={product.image}
                alt={product.title}
                className="aspect-video"
              >
                <div className="space-y-2 text-white">
                  <span className="inline-block rounded bg-primary px-2 py-1 text-xs">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-300">{product.description}</p>
                  <p className="font-medium">{product.price}</p>
                </div>
              </ImageCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-lg bg-muted p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Stay Inspired</h2>
            <p className="mb-6 text-muted-foreground">
              Subscribe to our newsletter for lifestyle tips, wellness advice, and travel inspiration.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 