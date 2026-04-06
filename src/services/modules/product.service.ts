import { api } from "../api/api";
import { Product, CreateProductDTO } from "../../types/product.types";

export const getProducts = async (): Promise<Product[]> => {
  const res = await api.get("/products");
  return res.data.data;
};

export const createProduct = async (data: CreateProductDTO) => {
  const res = await api.post("/products", data);
  return res.data;
};

export const deleteProduct = async (id: string) => {
  await api.delete(`/products/${id}`);
};

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await api.post("/products/upload", formData);

  return res.data.url;
};

export const deleteProductsBulk = async (ids: string[]) => {
  await api.delete("/products/bulk", {
    data: { ids },
  });
};