import { api } from "../api/api";
import { Product } from "../../types/product.types";
import { useAuthStore } from "../../store/auth.store";

/* =========================
   GET PRODUCTS (SMART)
========================= */
export const getProducts = async (): Promise<Product[]> => {
  const user = useAuthStore.getState().user;

  const res = await api.get("/products/me"); 
  let products: Product[] = res.data.data;

  return products;
};

/* =========================
   CREATE PRODUCT
========================= */
export const createProduct = async (data: any) => {
  const user = useAuthStore.getState().user;

  const payload = {
    ...data,
  };

  const res = await api.post("/products", payload);
  return res.data;
};

/* =========================
   IMPORT JSON (PRO FIX)
========================= */
export const importProductsJSON = async (products: any[]) => {
  const user = useAuthStore.getState().user;

  const payload = products.map((p) => ({
    ...p,
    provider: user?._id, // 🔥 CLAVE
  }));

  const res = await api.post("/products/import/json", payload);

  return res.data;
};

/* =========================
   UPLOAD IMAGE (FIX GRAVE)
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
    data: { ids },
  });
};