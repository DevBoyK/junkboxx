"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageCard } from "@/components/ui/image-card";
import { ArrowRight } from "lucide-react";

const featuredArtists = [
  {
    name: "Luna Ray",
    genre: "Electronic",
    image: "/images/artists/luna-ray.jpg",
    latestRelease: "Midnight Dreams EP",
    followers: "2.5M"
  },
  {
    name: "The Wanderers",
    genre: "Indie Rock",
    image: "/images/artists/wanderers.jpg",
    latestRelease: "Lost in Time",
    followers: "1.8M"
  },
  {
    name: "DJ Pulse",
    genre: "House",
    image: "/images/artists/dj-pulse.jpg",
    latestRelease: "Neon Nights",
    followers: "3.2M"
  }
];

const featuredPlaylists = [
  {
    title: "Morning Chill",
    curator: "JunkBoxx",
    image: "/images/playlists/morning-chill.jpg",
    tracks: "50 tracks",
    duration: "3h 25m"
  },
  {
    title: "Workout Beats",
    curator: "JunkBoxx",
    image: "/images/playlists/workout-beats.jpg",
    tracks: "45 tracks",
    duration: "2h 55m"
  },
  {
    title: "Late Night Vibes",
    curator: "JunkBoxx",
    image: "/images/playlists/late-night-vibes.jpg",
    tracks: "35 tracks",
    duration: "2h 15m"
  }
];

const newReleases = [
  {
    title: "Ethereal Dreams",
    artist: "Luna Ray",
    image: "/images/albums/ethereal-dreams.jpg",
    type: "Album",
    releaseDate: "Feb 15, 2024"
  },
  {
    title: "Urban Symphony",
    artist: "The Wanderers",
    image: "/images/albums/urban-symphony.jpg",
    type: "Single",
    releaseDate: "Feb 10, 2024"
  }
];

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/music-hero.mp4"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Music</h1>
          <p className="max-w-2xl text-lg">
            Discover new artists, curated playlists, and the latest releases. Your next favorite song is waiting.
          </p>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">Featured Artists</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredArtists.map((artist) => (
            <ImageCard
              key={artist.name}
              src={artist.image}
              alt={artist.name}
              className="aspect-[4/5]"
            >
              <div className="space-y-2 text-white">
                <h3 className="text-xl font-semibold">{artist.name}</h3>
                <p className="text-sm text-gray-300">{artist.genre}</p>
                <p>{artist.latestRelease}</p>
                <p className="text-sm">{artist.followers} followers</p>
              </div>
            </ImageCard>
          ))}
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold">Featured Playlists</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPlaylists.map((playlist) => (
              <ImageCard
                key={playlist.title}
                src={playlist.image}
                alt={playlist.title}
                className="aspect-square"
              >
                <div className="space-y-2 text-white">
                  <h3 className="text-xl font-semibold">{playlist.title}</h3>
                  <p className="text-sm">By {playlist.curator}</p>
                  <p className="text-sm text-gray-300">
                    {playlist.tracks} • {playlist.duration}
                  </p>
                </div>
              </ImageCard>
            ))}
          </div>
        </div>
      </section>

      {/* New Releases */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold">New Releases</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {newReleases.map((release) => (
            <ImageCard
              key={release.title}
              src={release.image}
              alt={release.title}
              className="aspect-[3/2]"
            >
              <div className="space-y-2 text-white">
                <span className="inline-block rounded bg-primary px-2 py-1 text-xs">
                  {release.type}
                </span>
                <h3 className="text-2xl font-semibold">{release.title}</h3>
                <p>{release.artist}</p>
                <p className="text-sm text-gray-300">{release.releaseDate}</p>
              </div>
            </ImageCard>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-lg bg-muted p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Stay in the Loop</h2>
            <p className="mb-6 text-muted-foreground">
              Subscribe to our newsletter for new music releases, artist spotlights, and exclusive content.
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