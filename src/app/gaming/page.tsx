'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function GamingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="gaming-page min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--gaming-primary))] to-[hsl(var(--gaming-secondary))] bg-clip-text text-transparent">
            Gaming & Esports Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your destination for gaming gear, esports news, and competitive gaming culture.
          </p>
        </section>

        {/* Featured Games */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Cyberpunk 2077</CardTitle>
                <CardDescription>Action RPG</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Experience the next-gen update with ray tracing and enhanced AI in Night City.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$59.99</span>
                  <Button variant="secondary">View Details</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Street Fighter 6</CardTitle>
                <CardDescription>Fighting</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The newest chapter in the legendary fighting game series with modern controls.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$69.99</span>
                  <Button variant="secondary">View Details</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Final Fantasy XVI</CardTitle>
                <CardDescription>Action RPG</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  An epic tale of revenge and redemption in a fantasy world torn by war.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">$69.99</span>
                  <Button variant="secondary">View Details</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Esports Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Esports Tournaments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>League of Legends Worlds 2024</CardTitle>
                <CardDescription>Global Championship</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    The biggest esports event of the year returns with top teams competing for the Summoner's Cup.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">MOBA</Badge>
                    <Badge variant="secondary">Live</Badge>
                    <Badge variant="secondary">Prize Pool: $2.2M</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Valorant Champions Tour</CardTitle>
                <CardDescription>Regional Qualifiers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Regional teams battle it out for a spot in the international championship.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">FPS</Badge>
                    <Badge variant="secondary">Upcoming</Badge>
                    <Badge variant="secondary">Prize Pool: $1M</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Gaming News */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Latest Gaming News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>The Rise of Cloud Gaming</CardTitle>
                <CardDescription>Industry Analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  How cloud gaming services are reshaping the future of game distribution and accessibility.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Next-Gen Console Wars</CardTitle>
                <CardDescription>Hardware News</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comparing the latest gaming consoles and their impact on the gaming industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter */}
        <section className="text-center">
          <Card className="bg-card/50 backdrop-blur-sm max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Stay in the Game</CardTitle>
              <CardDescription>Subscribe for gaming news and exclusive offers</CardDescription>
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