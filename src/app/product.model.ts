export interface Product {
  id: number;
  title: string;       // API uses 'title', not 'name'
  price: number;
  description: string;
  category: string;
  image: string;       // API uses 'image', not 'imageUrl'
  rating?: {           // Optional: API provides rating info
    rate: number;
    count: number;
  };
}