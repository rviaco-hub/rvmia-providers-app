import { create } from "zustand";
import { getOrders } from "../services/modules/order.service";
import { getProducts } from "../services/modules/product.service";
import { calculateMetrics } from "../utils/analytics";
import { Metrics } from "../types/analytics.types";

interface State {
  metrics: Metrics | null;
  loading: boolean;

  fetchAnalytics: () => Promise<void>;
}

export const useAnalyticsStore = create<State>((set) => ({
  metrics: null,
  loading: false,

  fetchAnalytics: async () => {
  try {
    set({ loading: true });

    const [orders, products] = await Promise.all([
      getOrders(),
      getProducts(),
    ]);

    const metrics = calculateMetrics(orders, products);

    set({ metrics, loading: false });
  } catch (error) {
    console.error("Analytics error:", error);

    set({
      metrics: {
        totalSales: 0,
        totalOrders: 0,
        totalProducts: 0,
        averageTicket: 0,
      },
      loading: false,
    });
  }
},
}));