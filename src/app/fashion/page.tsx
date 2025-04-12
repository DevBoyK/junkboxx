"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageCard } from "@/components/ui/image-card";
import { ArrowRight } from "lucide-react";

const featuredCollections = [
  {
    title: 'Streetwear Essentials',
    image: '/images/fashion/streetwear.jpg',
    items: '25 items',
    description: 'Urban style meets comfort'
  },
  {
    title: 'Luxury Accessories',
    image: '/images/fashion/luxury.jpg',
    items: '15 items',
    description: 'Timeless elegance'
  },
  {
    title: 'Seasonal Trends',
    image: '/images/fashion/trends.jpg',
    items: '30 items',
    description: 'Spring/Summer 2024'
  }
];

const featuredProducts = [
  {
    title: 'Oversized Hoodie',
    category: 'Streetwear',
    image: '/images/fashion/hoodie.jpg',
    price: '$89',
    description: 'Premium cotton blend'
  },
  {
    title: 'Designer Sneakers',
    category: 'Footwear',
    image: '/images/fashion/sneakers.jpg',
    price: '$199',
    description: 'Limited edition'
  },
  {
    title: 'Statement Jacket',
    category: 'Outerwear',
    image: '/images/fashion/jacket.jpg',
    price: '$299',
    description: 'Sustainable materials'
  }
];

export default function FashionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/fashion-hero.mp4"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Fashion</h1>
          <p className="max-w-2xl text-lg">
            Explore curated collections and trending styles. Discover your unique fashion statement.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Featured Collections</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCollections.map((collection) => (
            <ImageCard
              key={collection.title}
              src={collection.image}
              alt={collection.title}
              className="aspect-[4/5]"
            >
              <div className="space-y-2 text-white">
                <h3 className="text-xl font-semibold">{collection.title}</h3>
                <p className="text-sm text-gray-300">{collection.description}</p>
                <p>{collection.items}</p>
              </div>
            </ImageCard>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ImageCard
                key={product.title}
                src={product.image}
                alt={product.title}
                className="aspect-square"
              >
                <div className="space-y-2 text-white">
                  <span className="inline-block rounded bg-primary px-2 py-1 text-xs">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-semibold">{product.title}</h3>
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
            <h2 className="mb-4 text-2xl font-bold">Stay in Style</h2>
            <p className="mb-6 text-muted-foreground">
              Subscribe to our newsletter for fashion trends, style tips, and exclusive offers.
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