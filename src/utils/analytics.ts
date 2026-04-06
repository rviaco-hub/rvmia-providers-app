import { Metrics } from "../types/analytics.types";

export const calculateMetrics = (
  orders: any[],
  products: any[]
): Metrics => {
  const totalSales = orders.reduce(
    (acc, o) => acc + (o.total || 0),
    0
  );

  const totalOrders = orders.length;
  const totalProducts = products.length;

  const averageTicket =
    totalOrders > 0 ? totalSales / totalOrders : 0;

  return {
    totalSales,
    totalOrders,
    totalProducts,
    averageTicket,
  };
};