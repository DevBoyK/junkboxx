"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageCard } from "@/components/ui/image-card-new";
import { ArrowRight } from "lucide-react";

const featuredArtists = [
  {
    name: "Sarah Chen",
    specialty: "Digital Art",
    image: "/images/art/artist-1.jpg",
    description: "Creating vibrant digital landscapes",
  },
  {
    name: "Marcus Rivera",
    specialty: "Contemporary",
    image: "/images/art/artist-2.jpg",
    description: "Pushing boundaries in modern art",
  },
  {
    name: "Emma Thompson",
    specialty: "Mixed Media",
    image: "/images/art/artist-3.jpg",
    description: "Blending traditional and digital techniques",
  },
];

const currentExhibitions = [
  {
    title: "Digital Renaissance",
    date: "March 1-30, 2024",
    image: "/images/art/exhibition-1.jpg",
    description: "Exploring the intersection of technology and classical art",
  },
  {
    title: "Urban Canvas",
    date: "April 15-May 15, 2024",
    image: "/images/art/exhibition-2.jpg",
    description: "Street art meets gallery spaces",
  },
];

const artCollections = [
  {
    title: "Modern Abstracts",
    pieces: "15 pieces",
    image: "/images/art/collection-1.jpg",
    price: "From $500",
  },
  {
    title: "Digital Prints",
    pieces: "20 pieces",
    image: "/images/art/collection-2.jpg",
    price: "From $200",
  },
  {
    title: "Photography",
    pieces: "25 pieces",
    image: "/images/art/collection-3.jpg",
    price: "From $300",
  },
];

export default function ArtPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/art/hero-poster.jpg"
        >
          <source src="/videos/art-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-white mb-6">Art</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover contemporary artists, exhibitions, and collections that push the boundaries of creativity.
          </p>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Featured Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArtists.map((artist) => (
            <ImageCard
              key={artist.name}
              src={artist.image}
              alt={artist.name}
              className="aspect-[3/4]"
            >
              <div className="text-white">
                <span className="inline-block px-2 py-1 bg-primary rounded text-sm mb-2">
                  {artist.specialty}
                </span>
                <h3 className="text-xl font-semibold mb-2">{artist.name}</h3>
                <p className="text-white/90">{artist.description}</p>
              </div>
            </ImageCard>
          ))}
        </div>
      </section>

      {/* Current Exhibitions */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Current Exhibitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentExhibitions.map((exhibition) => (
              <ImageCard
                key={exhibition.title}
                src={exhibition.image}
                alt={exhibition.title}
                className="aspect-[16/9]"
              >
                <div className="text-white">
                  <h3 className="text-2xl font-semibold mb-2">{exhibition.title}</h3>
                  <p className="text-white/90 mb-2">{exhibition.description}</p>
                  <p className="text-primary-foreground font-medium">{exhibition.date}</p>
                </div>
              </ImageCard>
            ))}
          </div>
        </div>
      </section>

      {/* Art Collections */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Art Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artCollections.map((collection) => (
            <ImageCard
              key={collection.title}
              src={collection.image}
              alt={collection.title}
              className="aspect-[4/3]"
            >
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">{collection.title}</h3>
                <p className="text-white/90 mb-2">{collection.pieces}</p>
                <p className="text-lg font-bold">{collection.price}</p>
              </div>
            </ImageCard>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Inspired</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest art news, exhibitions, and artist features.
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