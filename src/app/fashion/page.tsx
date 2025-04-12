"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageCard } from "@/components/ui/image-card";
import { ArrowRight } from "lucide-react";

const featuredCollections = [
  {
    title: 'Urban Essentials',
    image: '/images/fashion/urban-essentials.jpg',
    items: '25 items',
    description: 'Core pieces for the modern streetwear enthusiast',
    category: 'Streetwear'
  },
  {
    title: 'Hip Hop Heritage',
    image: '/images/fashion/hiphop-heritage.jpg',
    items: '15 items',
    description: 'Classic styles that defined hip hop fashion',
    category: 'Hip Hop'
  },
  {
    title: 'Gaming Culture',
    image: '/images/fashion/gaming-culture.jpg',
    items: '30 items',
    description: 'Where gaming meets street fashion',
    category: 'Gaming'
  }
];

const featuredProducts = [
  {
    title: 'Oversized Hoodie',
    category: 'Streetwear',
    image: '/images/fashion/hoodie.jpg',
    price: '$89',
    description: 'Premium cotton blend with urban-inspired graphics'
  },
  {
    title: 'Limited Edition Sneakers',
    category: 'Footwear',
    image: '/images/fashion/sneakers.jpg',
    price: '$199',
    description: 'Exclusive collaboration with top gaming brands'
  },
  {
    title: 'Gaming Jacket',
    category: 'Outerwear',
    image: '/images/fashion/jacket.jpg',
    price: '$299',
    description: 'Tech-infused streetwear for the modern gamer'
  }
];

const blogPosts = [
  {
    title: "The Evolution of Hip Hop Fashion",
    excerpt: "From the streets to the runway: How hip hop continues to influence global fashion",
    image: "/images/blog/hiphop-fashion.jpg",
    date: "Feb 20, 2024",
    readTime: "5 min read"
  },
  {
    title: "Gaming Meets Streetwear",
    excerpt: "How gaming culture is shaping the future of urban fashion",
    image: "/images/blog/gaming-streetwear.jpg",
    date: "Feb 18, 2024",
    readTime: "4 min read"
  },
  {
    title: "The Rise of Tech-Infused Fashion",
    excerpt: "Exploring how technology is revolutionizing streetwear design",
    image: "/images/blog/tech-fashion.jpg",
    date: "Feb 15, 2024",
    readTime: "6 min read"
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
          <h1 className="mb-4 text-5xl font-bold">Urban Fashion</h1>
          <p className="max-w-2xl text-lg">
            Where street culture meets high fashion. Discover the latest in urban streetwear, hip hop style, and gaming culture.
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
                <span className="inline-block rounded bg-primary px-2 py-1 text-xs">
                  {collection.category}
                </span>
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
          <h2 className="mb-8 text-3xl font-bold">Must-Have Pieces</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ImageCard
                key={product.title}
                src={product.image}
                alt={product.title}
                className="aspect-[4/5]"
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

      {/* Blog Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Fashion Culture</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <ImageCard
              key={post.title}
              src={post.image}
              alt={post.title}
              className="aspect-[4/5]"
            >
              <div className="space-y-2 text-white">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-300">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </ImageCard>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-lg bg-muted p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Stay Fresh</h2>
            <p className="mb-6 text-muted-foreground">
              Subscribe to our newsletter for the latest drops, style tips, and urban fashion news.
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