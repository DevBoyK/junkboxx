"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageCard } from "@/components/ui/image-card-new";
import { SpotifyPlayer } from "@/components/ui/spotify-player";
import { ArrowRight, Play } from "lucide-react";

const featuredArtists = [
  {
    name: "The Weeknd",
    image: "/images/artists/weeknd.jpg",
    description: "Grammy-winning artist known for his unique blend of R&B and pop",
  },
  {
    name: "Travis Scott",
    image: "/images/artists/travis.jpg",
    description: "Hip-hop artist and producer pushing the boundaries of sound",
  },
  {
    name: "Billie Eilish",
    image: "/images/artists/billie.jpg",
    description: "Genre-defying artist with a unique voice and style",
  },
];

const featuredPlaylists = [
  {
    title: "Urban Vibes",
    description: "The latest in urban music and culture",
    image: "/images/playlists/urban-vibes.jpg",
    spotifyId: "37i9dQZF1DX4Wsb4d7NKfP",
  },
  {
    title: "Tech Beats",
    description: "Electronic and experimental sounds",
    image: "/images/playlists/tech-beats.jpg",
    spotifyId: "37i9dQZF1DX4Wsb4d7NKfP",
  },
];

export default function MusicPage() {
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
          <source src="/videos/music-hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Music</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover the latest tracks, artists, and playlists curated by our team
          </p>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <div key={artist.name} className="group relative overflow-hidden rounded-lg">
                <ImageCard
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{artist.name}</h3>
                    <p className="text-white/80">{artist.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPlaylists.map((playlist) => (
              <div key={playlist.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{playlist.title}</h3>
                  <p className="text-gray-600 mb-4">{playlist.description}</p>
                  <SpotifyPlayer playlistId={playlist.spotifyId} />
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
            Subscribe to our newsletter for the latest music releases and exclusive content
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