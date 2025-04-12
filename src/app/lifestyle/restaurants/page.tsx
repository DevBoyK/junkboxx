"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageCard } from "@/components/ui/image-card";
import { ArrowRight, Search, MapPin, Loader2, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample restaurant data - you can replace this with your hand-picked selections
const restaurants = [
  {
    id: 1,
    name: "Sushi Master",
    city: "Tokyo",
    cuisine: "Japanese",
    image: "/images/restaurants/sushi-master.jpg",
    rating: 4.8,
    priceRange: "$$$",
    description: "Authentic omakase experience in the heart of Tokyo"
  },
  {
    id: 2,
    name: "La Petite Maison",
    city: "Paris",
    cuisine: "French",
    image: "/images/restaurants/la-petite-maison.jpg",
    rating: 4.9,
    priceRange: "$$$$",
    description: "Classic French cuisine with a modern twist"
  },
  {
    id: 3,
    name: "Taco Revolution",
    city: "Mexico City",
    cuisine: "Mexican",
    image: "/images/restaurants/taco-revolution.jpg",
    rating: 4.7,
    priceRange: "$",
    description: "Street-style tacos with innovative fillings"
  },
  {
    id: 4,
    name: "Bamboo Garden",
    city: "Bangkok",
    cuisine: "Thai",
    image: "/images/restaurants/bamboo-garden.jpg",
    rating: 4.6,
    priceRange: "$$",
    description: "Traditional Thai dishes in a serene setting"
  },
  {
    id: 5,
    name: "Pasta Paradise",
    city: "Rome",
    cuisine: "Italian",
    image: "/images/restaurants/pasta-paradise.jpg",
    rating: 4.8,
    priceRange: "$$",
    description: "Handmade pasta and authentic Roman recipes"
  },
  {
    id: 6,
    name: "BBQ King",
    city: "Austin",
    cuisine: "American",
    image: "/images/restaurants/bbq-king.jpg",
    rating: 4.9,
    priceRange: "$$",
    description: "Texas-style barbecue with all the fixings"
  }
];

// Get unique cities and cuisines from the restaurants data
const cities = Array.from(new Set(restaurants.map(restaurant => restaurant.city)));
const cuisines = Array.from(new Set(restaurants.map(restaurant => restaurant.cuisine)));

export default function RestaurantsPage() {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedCuisine, setSelectedCuisine] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("rating");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [videoError, setVideoError] = useState<boolean>(false);

  const restaurantsPerPage = 6;

  // Filter and sort restaurants
  const filteredRestaurants = restaurants
    .filter(restaurant => {
      const matchesCity = !selectedCity || restaurant.city === selectedCity;
      const matchesCuisine = !selectedCuisine || restaurant.cuisine === selectedCuisine;
      const matchesSearch = !searchQuery || 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCity && matchesCuisine && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "price":
          return b.priceRange.length - a.priceRange.length;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredRestaurants.length / restaurantsPerPage);
  const currentRestaurants = filteredRestaurants.slice(
    (currentPage - 1) * restaurantsPerPage,
    currentPage * restaurantsPerPage
  );

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/restaurants-hero.mp4"
            onError={handleVideoError}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Global Dining Guide</h1>
          <p className="max-w-2xl text-lg">
            Discover hand-picked restaurants from around the world, curated for the discerning food enthusiast.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={!selectedCity ? "default" : "outline"}
              onClick={() => setSelectedCity("")}
            >
              All Cities
            </Button>
            {cities.map((city) => (
              <Button
                key={city}
                variant={selectedCity === city ? "default" : "outline"}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </Button>
            ))}
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              <Select
                value={selectedCuisine}
                onValueChange={setSelectedCuisine}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Cuisines" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Cuisines</SelectItem>
                  {cuisines.map((cuisine) => (
                    <SelectItem key={cuisine} value={cuisine}>
                      {cuisine}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={sortBy}
                onValueChange={setSortBy}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search restaurants or cuisines..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        {isLoading ? (
          <div className="flex h-[400px] items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentRestaurants.map((restaurant) => (
                <ImageCard
                  key={restaurant.id}
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="aspect-[4/5]"
                  fallback={
                    <div className="flex h-full items-center justify-center bg-muted">
                      <span className="text-muted-foreground">No image available</span>
                    </div>
                  }
                >
                  <div className="space-y-2 text-white">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{restaurant.city}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-primary/20 px-2 py-1 text-xs">
                        {restaurant.cuisine}
                      </span>
                      <span className="rounded bg-primary/20 px-2 py-1 text-xs">
                        {restaurant.priceRange}
                      </span>
                      <span className="rounded bg-primary/20 px-2 py-1 text-xs">
                        ★ {restaurant.rating}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300">{restaurant.description}</p>
                  </div>
                </ImageCard>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-lg bg-muted p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Stay Updated</h2>
            <p className="mb-6 text-muted-foreground">
              Subscribe to our newsletter for the latest restaurant recommendations and culinary experiences.
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