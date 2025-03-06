"use client";
import { trpc } from "@/utils/trpc";
import SearchBar from "@/components/SearchBar/SearchBar";
import FilterBar from "@/components/FilterBar/FilterBar";
import RestaurantPost from "@/components/RestaurantPost/RestaurantPost";
import PostSkeleton from "@/components/PostSkeleton/PostSkeleton";
import { useState, useEffect } from "react";
import { Restaurant } from "@/types";

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const toggleFavoriteMutation = trpc.toggleFavoriteRestaurant.useMutation();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch('/api/trpc/getRestaurants'); 
        const result = await response.json();
        const initialRestaurants = result.result?.data;
        const sortedRestaurants = [...initialRestaurants].sort((a, b) => a.id.localeCompare(b.id));
        setRestaurants(sortedRestaurants);
      } catch (error) {
        console.error("Failed to fetch restaurants", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleFavorite = async (id: string) => {
    setLoadingId(id);
    try {
      const updatedRestaurant = await toggleFavoriteMutation.mutateAsync({ id });
      setRestaurants((prevRestaurants) => {
        const updatedRestaurants = prevRestaurants.map((restaurant) =>
          restaurant.id === id ? { ...restaurant, isFavorite: updatedRestaurant.isFavorite } : restaurant
        );
        return updatedRestaurants.sort((a, b) => a.id.localeCompare(b.id));
      });
    } catch (error) {
      console.error("Failed to update favorite status", error);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] justify-items-center p-6 sm:p-12 gap-6 font-geist-sans">
      {/* Search Bar */}
      <div className="w-full max-w-md">
        <SearchBar />
      </div>

      {/* Filter Buttons */}
      <FilterBar />

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-neutral-600 w-full max-w-7xl">
      {restaurants.length === 0 ? (
          Array.from({ length: 8 }).map((_, index) => (
            <PostSkeleton key={index} />
          ))
        ) : (
          restaurants.map((restaurant) => (
            <RestaurantPost
              key={restaurant.id}
              restaurant={restaurant}
              toggleFavorite={() => handleFavorite(restaurant.id)}
              loadingId={loadingId}
            />
          ))
        )}
      </div>
    </div>

  );
}


