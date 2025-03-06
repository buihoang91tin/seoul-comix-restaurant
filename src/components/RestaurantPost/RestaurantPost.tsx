import React from "react";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { getStoreCategoryText } from "@/utils/common";
import { Restaurant } from "@/types";

type RestaurantPostProps = {
  restaurant: Restaurant;
  toggleFavorite: () => void;
  loadingId: string | null;
};

const RestaurantPost: React.FC<RestaurantPostProps> = ({ restaurant, toggleFavorite, loadingId }) => {
  return (
    <div key={restaurant.id} className="bg-white dark:bg-gray-900 rounded-lg " data-testid="restaurant-post">
      {/* Image */}
      <div className="rounded-xl overflow-hidden mb-3 relative ">
        <ImageSlider images={restaurant.images} name={restaurant.name} />
        {/* Favorite Button */}
        <button
          type="button"
          className={`mt-2 text-sm font-medium rounded-full px-2 py-2 absolute top-1 right-2 z-9 cursor-pointer ${
            restaurant.isFavorite
              ? 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300 favorite'
              : 'text-white bg-unfavorite dark:bg-white-400 dark:text-gray-300'
          }`}
          onClick={toggleFavorite}
          disabled={loadingId === restaurant.id}
          name={`favorite-${restaurant.id}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
      </div>

      {/* Featured Badge */}
      {restaurant.featured && (
        <span className="inline-flex items-center text-xs font-semibold text-orange-600 rounded-full dark:bg-orange-900 dark:text-orange-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 rotate-180 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
          {restaurant.featured.text}
        </span>
      )}

      {/* Restaurant Info */}
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-bold truncate">{restaurant.name}</h4>
        <p className="text-sm text-yellow-600 r-rating-span">⭐ {restaurant.rating}({restaurant.ratingCount})</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 line-clamp-2">{restaurant.desc}</p>

      {/* Category & Location */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {getStoreCategoryText(restaurant.category)} • {restaurant.city} • {restaurant.priceRange ? `${restaurant.priceRange} 남성` : ""}
      </p>
    </div>
  );
};

export default RestaurantPost;