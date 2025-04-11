"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpotifyPlayerProps {
  playlistId: string;
  className?: string;
}

export function SpotifyPlayer({ playlistId, className }: SpotifyPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<{
    name: string;
    artist: string;
    image: string;
  } | null>(null);
  const [progress, setProgress] = useState(0);

  // Simulated track data - replace with actual Spotify API integration
  useEffect(() => {
    const tracks = [
      {
        name: "Track Name",
        artist: "Artist Name",
        image: "/placeholder-track.jpg",
      },
      // Add more tracks as needed
    ];
    setCurrentTrack(tracks[0]);
  }, []);

  // Simulated progress update
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 0;
        }
        return prev + 0.1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-lg bg-card p-6 shadow-lg backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center space-x-4">
        {currentTrack && (
          <div className="relative h-16 w-16 overflow-hidden rounded-lg">
            <motion.img
              src={currentTrack.image}
              alt={currentTrack.name}
              className="h-full w-full object-cover"
              animate={{
                rotate: isPlaying ? 360 : 0,
              }}
              transition={{
                duration: 10,
                repeat: isPlaying ? Infinity : 0,
                ease: "linear",
              }}
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold">{currentTrack?.name}</h3>
          <p className="text-sm text-muted-foreground">
            {currentTrack?.artist}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="relative h-1 w-full rounded-full bg-muted">
          <motion.div
            className="absolute left-0 top-0 h-full rounded-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center space-x-8">
        <button
          className="rounded-full p-2 hover:bg-accent"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <SkipBack className="h-6 w-6" />
        </button>
        <button
          className="rounded-full bg-primary p-4 text-primary-foreground hover:bg-primary/90"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Pause className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Play className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        <button
          className="rounded-full p-2 hover:bg-accent"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <SkipForward className="h-6 w-6" />
        </button>
      </div>
    </motion.div>
  );
} 