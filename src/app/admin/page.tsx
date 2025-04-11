"use client";

import { Package, Music2, TrendingUp } from "lucide-react";

const stats = [
  {
    name: "Total Products",
    value: "0",
    icon: Package,
    description: "Products in your store",
  },
  {
    name: "Active Playlists",
    value: "0",
    icon: Music2,
    description: "Spotify playlists",
  },
  {
    name: "Monthly Views",
    value: "0",
    icon: TrendingUp,
    description: "Last 30 days",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="group relative overflow-hidden rounded-lg bg-card p-6 shadow-md transition-all hover:shadow-lg"
          >
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Recent Activity Section */}
        <div className="rounded-lg bg-card p-6">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              No recent activity to show.
            </p>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="rounded-lg bg-card p-6">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <div className="mt-4 grid gap-4">
            <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Add New Product
            </button>
            <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 