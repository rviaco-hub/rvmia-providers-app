export interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  images: string[];

  provider: string; // 🔥 SIEMPRE ID
}
export interface CreateProductDTO {
  name: string;
  price: number;
  description?: string;
  images?: string[];
}

