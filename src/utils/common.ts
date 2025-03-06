import { TEXT_BY_STORE_CATEGORY } from "@/constants/category"

export const getStoreCategoryText = (category: string) => {
  return TEXT_BY_STORE_CATEGORY[category as keyof typeof TEXT_BY_STORE_CATEGORY] || category;
}