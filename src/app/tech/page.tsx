"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageCard } from "@/components/ui/image-card";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    title: "iPhone 15 Pro",
    category: "Smartphones",
    image: "/images/tech/iphone-15-pro.jpg",
    price: "$999",
    description: "The most powerful iPhone ever"
  },
  {
    title: "MacBook Pro M3",
    category: "Laptops",
    image: "/images/tech/macbook-pro.jpg",
    price: "$1,999",
    description: "Revolutionary performance"
  },
  {
    title: "AirPods Pro",
    category: "Audio",
    image: "/images/tech/airpods-pro.jpg",
    price: "$249",
    description: "Immersive sound experience"
  }
];

const latestNews = [
  {
    title: "Apple Vision Pro Launch",
    date: "Feb 2, 2024",
    image: "/images/tech/vision-pro.jpg",
    category: "Product Launch"
  },
  {
    title: "iOS 17 Features",
    date: "Jan 25, 2024",
    image: "/images/tech/ios-17.jpg",
    category: "Software"
  }
];

export default function TechPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/tech-hero.mp4"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Tech</h1>
          <p className="max-w-2xl text-lg">
            Explore the latest in technology. From smartphones to smart homes, stay ahead with cutting-edge innovations.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
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
      </section>

      {/* Latest News */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold">Latest News</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {latestNews.map((news) => (
              <ImageCard
                key={news.title}
                src={news.image}
                alt={news.title}
                className="aspect-video"
              >
                <div className="space-y-2 text-white">
                  <span className="inline-block rounded bg-primary px-2 py-1 text-xs">
                    {news.category}
                  </span>
                  <h3 className="text-2xl font-semibold">{news.title}</h3>
                  <p className="text-sm text-gray-300">{news.date}</p>
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
            <h2 className="mb-4 text-2xl font-bold">Stay Updated</h2>
            <p className="mb-6 text-muted-foreground">
              Subscribe to our newsletter for the latest tech news, product reviews, and exclusive deals.
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