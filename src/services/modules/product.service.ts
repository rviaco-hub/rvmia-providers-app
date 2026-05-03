import { api } from "../api/api";
import { Product } from "../../types/product.types";

/* =========================
   GET PRODUCTS
========================= */
export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await api.get("/products/me");

    return res.data?.data || [];
  } catch (error) {
    console.error("GET PRODUCTS ERROR:", error);
    return [];
  }
};

/* =========================
   CREATE PRODUCT
========================= */
export const createProduct = async (data: any) => {
  const res = await api.post("/products", data);
  return res.data;
};

/* =========================
   IMPORT JSON
========================= */
export const importProductsJSON = async (products: any[]) => {
  const res = await api.post("/products/import/json", products);
  return res.data;
};

/* =========================
   UPLOAD IMAGE
========================= */
export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await api.post("/products/upload", formData);

  return res.data.url;
};

/* =========================
   DELETE
========================= */
export const deleteProduct = async (id: string) => {
  await api.delete(`/products/${id}`);
};

export const deleteProductsBulk = async (ids: string[]) => {
  await api.delete("/products/bulk", {
    data: { ids }
  });
};