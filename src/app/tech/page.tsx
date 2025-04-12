"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageCard } from "@/components/ui/image-card-new";
import { ArrowRight } from "lucide-react";

const featuredProducts = [
  {
    name: "iPhone 15 Pro",
    image: "/images/tech/iphone.jpg",
    description: "The latest iPhone with A17 Pro chip and titanium design",
    price: "$999",
  },
  {
    name: "MacBook Pro M3",
    image: "/images/tech/macbook.jpg",
    description: "Powerful laptop with M3 chip and Liquid Retina XDR display",
    price: "$1999",
  },
  {
    name: "AirPods Pro",
    image: "/images/tech/airpods.jpg",
    description: "Active noise cancellation and spatial audio",
    price: "$249",
  },
];

const latestNews = [
  {
    title: "Apple Vision Pro Launch",
    description: "The future of spatial computing is here",
    image: "/images/tech/vision-pro.jpg",
    date: "February 2, 2024",
  },
  {
    title: "iOS 17 Features",
    description: "Discover the new features in the latest iOS update",
    image: "/images/tech/ios17.jpg",
    date: "January 15, 2024",
  },
];

export default function TechPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/tech-hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Tech</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore the latest in technology and innovation
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.name} className="group relative overflow-hidden rounded-lg">
                <ImageCard
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-white/80 mb-2">{product.description}</p>
                    <p className="text-white font-semibold">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestNews.map((news) => (
              <div key={news.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <ImageCard
                  src={news.image}
                  alt={news.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500">{news.date}</span>
                  <h3 className="text-2xl font-bold mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.description}</p>
                  <Button variant="outline">Read More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-white/80 mb-8">
            Subscribe to our newsletter for the latest tech news and product releases
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button className="bg-white text-black hover:bg-white/90">
              Subscribe <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 