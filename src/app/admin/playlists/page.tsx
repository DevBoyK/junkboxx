"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Music2 } from "lucide-react";

interface Playlist {
  id: string;
  title: string;
  description: string;
  spotifyId: string;
  imageUrl: string;
}

export default function PlaylistsPage() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Playlists</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Playlist
        </button>
      </div>

      {/* Playlists Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {playlists.length === 0 ? (
          <div className="col-span-full rounded-lg bg-card p-6 text-center">
            <Music2 className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-2 text-lg font-medium">No playlists yet</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Add your first Spotify playlist to get started.
            </p>
          </div>
        ) : (
          playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="group relative overflow-hidden rounded-lg bg-card"
            >
              <div className="aspect-square">
                <img
                  src={playlist.imageUrl}
                  alt={playlist.title}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{playlist.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {playlist.description}
                </p>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="rounded-md p-2 hover:bg-accent">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button className="rounded-md p-2 hover:bg-accent">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Playlist Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-lg bg-card p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Add New Playlist</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Spotify Playlist URL
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="https://open.spotify.com/playlist/..."
                />
                <p className="mt-1 text-sm text-muted-foreground">
                  Paste the Spotify playlist URL to import its details
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Custom Description (Optional)
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2"
                  rows={3}
                  placeholder="Add a custom description for your playlist..."
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="rounded-md border border-input px-4 py-2 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
                >
                  Add Playlist
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 