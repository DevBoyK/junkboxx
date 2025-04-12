"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageCard } from "@/components/ui/image-card";
import { ArrowRight } from "lucide-react";

const featuredArtworks = [
  {
    title: 'Abstract Harmony',
    artist: 'Sarah Chen',
    image: '/images/art/abstract-harmony.jpg',
    medium: 'Oil on Canvas',
    price: '$2,500'
  },
  {
    title: 'Urban Dreams',
    artist: 'Marcus Rivera',
    image: '/images/art/urban-dreams.jpg',
    medium: 'Mixed Media',
    price: '$1,800'
  },
  {
    title: 'Digital Fusion',
    artist: 'Alex Kim',
    image: '/images/art/digital-fusion.jpg',
    medium: 'Digital Art',
    price: '$950'
  }
];

const currentExhibitions = [
  {
    title: 'Modern Perspectives',
    curator: 'Emily Watson',
    image: '/images/art/modern-perspectives.jpg',
    dates: 'Jan 15 - Mar 30, 2024',
    description: 'A curated collection exploring contemporary artistic vision'
  },
  {
    title: 'Digital Renaissance',
    curator: 'David Park',
    image: '/images/art/digital-renaissance.jpg',
    dates: 'Feb 1 - Apr 15, 2024',
    description: 'Where traditional art meets digital innovation'
  }
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
      <section className="relative h-[60vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/art-hero.mp4"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Art</h1>
          <p className="max-w-2xl text-lg">
            Discover unique artworks from emerging and established artists. From traditional to digital, find pieces that speak to you.
          </p>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Featured Artworks</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredArtworks.map((artwork) => (
            <ImageCard
              key={artwork.title}
              src={artwork.image}
              alt={artwork.title}
              className="aspect-[4/5]"
            >
              <div className="space-y-2 text-white">
                <h3 className="text-xl font-semibold">{artwork.title}</h3>
                <p>{artwork.artist}</p>
                <p className="text-sm text-gray-300">{artwork.medium}</p>
                <p className="font-medium">{artwork.price}</p>
              </div>
            </ImageCard>
          ))}
        </div>
      </section>

      {/* Current Exhibitions */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold">Current Exhibitions</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {currentExhibitions.map((exhibition) => (
              <ImageCard
                key={exhibition.title}
                src={exhibition.image}
                alt={exhibition.title}
                className="aspect-video"
              >
                <div className="space-y-2 text-white">
                  <h3 className="text-2xl font-semibold">{exhibition.title}</h3>
                  <p className="text-sm">Curated by {exhibition.curator}</p>
                  <p className="text-sm text-gray-300">{exhibition.dates}</p>
                  <p>{exhibition.description}</p>
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
              Subscribe to our newsletter for the latest art exhibitions, new arrivals, and exclusive previews.
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