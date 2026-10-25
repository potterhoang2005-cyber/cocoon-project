export interface Product {
  id: string;
  name: string;
  vietnameseName: string;
  subtitle: string;
  category: 'skincare' | 'bodycare' | 'haircare' | 'lipcare' | 'combo' | 'refill';
  categoryLabel: string;
  capacity: string;
  capacities: string[];
  price: number;
  originalPrice?: number;
  ingredientKey: string;
  ingredientRegion: string;
  description: string;
  benefits: string[];
  mainIngredients: string[];
  usage: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  isRefill?: boolean;
  texture: string;
  colorHex: string;
}

export interface Ingredient {
  id: string;
  name: string;
  scientificName: string;
  region: string;
  regionDetail: string;
  highlight: string;
  description: string;
  benefits: string[];
  associatedProducts: string[];
  color: string;
  iconType: 'melon' | 'coffee' | 'turmeric' | 'pomelo' | 'lotus';
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  scope: string;
  description: string;
  badgeText: string;
}

export interface RoutineStep {
  stepNumber: number;
  stepName: string;
  productName: string;
  action: string;
  capacity: string;
}

export interface RoutineNeed {
  id: string;
  title: string;
  tagline: string;
  description: string;
  idealFor: string;
  steps: RoutineStep[];
  recommendedProductId: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  verified: boolean;
  productName: string;
  date: string;
  content: string;
  rating: number;
}

export interface CartItem {
  product: Product;
  selectedCapacity: string;
  quantity: number;
}
