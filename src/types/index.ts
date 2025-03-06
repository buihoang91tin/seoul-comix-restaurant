export type Restaurant = {
  id: string;
  images: string[];
  name: string;
  isFavorite: boolean;
  featured?: {
    text: string;
  } | null;
  rating: number;
  ratingCount: number;
  desc: string;
  category: string;
  city: string;
  priceRange?: string | undefined;
};