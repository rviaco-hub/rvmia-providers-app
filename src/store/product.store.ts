import { create } from "zustand";
import { Product } from "../types/product.types";
import { getProducts } from "../services/modules/product.service";

interface ProductState {
  products: Product[];
  filtered: Product[];
  selected: string[];

  fetchProducts: () => Promise<void>;
  search: (term: string) => void;
  toggleSelect: (id: string) => void;
  clearSelection: () => void;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  filtered: [],
  selected: [],

  fetchProducts: async () => {
    const data = await getProducts();
    set({ products: data, filtered: data });
  },

  search: (term) => {
    const { products } = get();

    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(term.toLowerCase())
    );

    set({ filtered });
  },

  toggleSelect: (id) => {
    const { selected } = get();

    if (selected.includes(id)) {
      set({ selected: selected.filter((i) => i !== id) });
    } else {
      set({ selected: [...selected, id] });
    }
  },

  clearSelection: () => set({ selected: [] }),
}));