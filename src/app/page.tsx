"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, Pause, ShoppingBag, ArrowRight } from "lucide-react";
import { ImageCard } from "@/components/ui/image-card";
import { SpotifyPlayer } from "@/components/ui/spotify-player";
import { ParallaxSection, ParallaxContent } from "@/components/ui/parallax-section";

// Sample data - replace with your actual data
const featuredProducts = [
  {
    id: "1",
    title: "Limited Edition Tee",
    description: "Exclusive design",
    image: "/products/tee.jpg",
    price: 49.99,
  },
  {
    id: "2",
    title: "Signature Hoodie",
    description: "Premium comfort",
    image: "/products/hoodie.jpg",
    price: 89.99,
  },
  {
    id: "3",
    title: "Classic Cap",
    description: "Essential accessory",
    image: "/products/cap.jpg",
    price: 29.99,
  },
];

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Parallax */}
      <ParallaxSection className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/hero-background.mp4" type="video/mp4" />
          </video>
        </div>
        <ParallaxContent className="relative flex h-full items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold sm:text-6xl md:text-7xl"
            >
              JUNKBOXX
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground sm:text-xl"
            >
              Where Fashion Meets Music
            </motion.p>
          </div>
        </ParallaxContent>
      </ParallaxSection>

      {/* Featured Products */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={containerVariants}
              className="text-center text-3xl font-bold"
            >
              Featured Collection
            </motion.h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={containerVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <ImageCard
                    src={product.image}
                    alt={product.title}
                    title={product.title}
                    description={`$${product.price}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Playlist with Parallax */}
      <ParallaxSection className="bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <ParallaxContent>
              <h2 className="text-3xl font-bold">This Week's Playlist</h2>
              <p className="mt-4 text-muted-foreground">
                Curated sounds to enhance your style
              </p>
              <SpotifyPlayer
                playlistId="your-playlist-id"
                className="mt-6"
              />
            </ParallaxContent>
            <ParallaxContent speed={0.3}>
              <div className="aspect-square rounded-lg bg-muted" />
            </ParallaxContent>
          </div>
        </div>
      </ParallaxSection>

      {/* Newsletter */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-card p-8 text-center"
          >
            <h2 className="text-3xl font-bold">Stay Updated</h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe to get the latest drops and playlists
            </p>
            <form className="mx-auto mt-6 flex max-w-md gap-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
              />
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}