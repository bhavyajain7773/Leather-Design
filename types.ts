
export interface Product {
  id: string;
  name: string;
  // Fix: Expanded the category union type to include product line categories used in the export portfolio
  category: 'Full-Grain' | 'Top-Grain' | 'Split-Grain' | 'Genuine' | 'Bonded' | 'Leather & Canvas' | 'Fashion Bags' | 'Lifestyle Essentials';
  price: string;
  moq: string;
  imageUrl: string;
}

export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
  position: { top?: string; left?: string; right?: string; bottom?: string };
}
