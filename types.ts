
export interface Product {
  id: string;
  name: string;
  category: 'Full-Grain' | 'Top-Grain' | 'Split-Grain' | 'Genuine' | 'Bonded';
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
