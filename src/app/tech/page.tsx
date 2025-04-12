"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function TechPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="tech-page min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--tech-primary))] to-[hsl(var(--tech-secondary))] bg-clip-text text-transparent">
            Urban Tech & Gaming Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where street culture meets cutting-edge technology. Discover the latest in gaming, urban tech, and digital lifestyle.
          </p>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Razer Blade 15</CardTitle>
                <CardDescription>Gaming Laptop</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The ultimate gaming laptop for streamers and content creators. Features RTX 4070 and 240Hz display.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$2,499</span>
                  <Button variant="secondary">View Details</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>PlayStation 5</CardTitle>
                <CardDescription>Gaming Console</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Next-gen gaming with 4K resolution, ray tracing, and ultra-fast SSD. Experience gaming like never before.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$499</span>
                  <Button variant="secondary">View Details</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Meta Quest 3</CardTitle>
                <CardDescription>VR Headset</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Step into the metaverse with advanced mixed reality and high-resolution displays.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$499</span>
                  <Button variant="secondary">View Details</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Gaming Setups */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Gaming Setups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Streamer's Paradise</CardTitle>
                <CardDescription>By @UrbanGamer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Professional streaming setup with dual monitors, RGB lighting, and high-end audio equipment.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Streaming</Badge>
                    <Badge variant="secondary">RGB</Badge>
                    <Badge variant="secondary">Audio</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Competitive Edge</CardTitle>
                <CardDescription>By @ProGamer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Tournament-ready setup with 360Hz monitor, mechanical keyboard, and precision mouse.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Esports</Badge>
                    <Badge variant="secondary">Performance</Badge>
                    <Badge variant="secondary">Gaming</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Latest News */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest in Tech Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>The Intersection of Streetwear and Tech</CardTitle>
                <CardDescription>By TechStyle Magazine</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  How urban fashion brands are embracing technology to create innovative wearables and digital experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Hip Hop's Influence on Gaming Culture</CardTitle>
                <CardDescription>By UrbanTech Weekly</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Exploring how hip hop artists are shaping the future of gaming and virtual experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center">
          <Card className="bg-card/50 backdrop-blur-sm max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Stay Updated</CardTitle>
              <CardDescription>Get the latest in urban tech and gaming culture</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
} 