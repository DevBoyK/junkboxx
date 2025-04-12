"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageCard } from "@/components/ui/image-card-new";
import { ArrowRight } from "lucide-react";

const featuredCollections = [
  {
    name: "Streetwear Essentials",
    image: "/images/fashion/streetwear.jpg",
    description: "Urban-inspired clothing for everyday wear",
    items: "24 items",
  },
  {
    name: "Luxury Accessories",
    image: "/images/fashion/accessories.jpg",
    description: "High-end accessories to elevate your style",
    items: "18 items",
  },
  {
    name: "Seasonal Trends",
    image: "/images/fashion/trends.jpg",
    description: "Latest fashion trends for the current season",
    items: "32 items",
  },
];

const featuredProducts = [
  {
    name: "Oversized Hoodie",
    image: "/images/fashion/hoodie.jpg",
    description: "Comfortable and stylish oversized hoodie",
    price: "$89.99",
  },
  {
    name: "Designer Sneakers",
    image: "/images/fashion/sneakers.jpg",
    description: "Limited edition designer sneakers",
    price: "$299.99",
  },
  {
    name: "Statement Jacket",
    image: "/images/fashion/jacket.jpg",
    description: "Bold and unique statement piece",
    price: "$199.99",
  },
];

export default function FashionPage() {
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
          <source src="/videos/fashion-hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Fashion</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover the latest trends and styles
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCollections.map((collection) => (
              <div key={collection.name} className="group relative overflow-hidden rounded-lg">
                <ImageCard
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{collection.name}</h3>
                    <p className="text-white/80 mb-2">{collection.description}</p>
                    <p className="text-white font-semibold">{collection.items}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <ImageCard
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="text-lg font-semibold mb-4">{product.price}</p>
                  <Button>Add to Cart</Button>
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
            Subscribe to our newsletter for the latest fashion trends and exclusive offers
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