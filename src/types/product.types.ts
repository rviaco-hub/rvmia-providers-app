export interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  images?: string[];
}

export interface CreateProductDTO {
  name: string;
  price: number;
  description?: string;
  images?: string[];
}