import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useAnalyticsStore } from "../../store/analytics.store";
import KpiCards from "../../components/dashboard/KpiCards";
import SalesChart from "../../components/dashboard/SalesChart";
import { getOrders } from "../../services/modules/order.service";

export default function DashboardPage() {
  const { metrics, fetchAnalytics } = useAnalyticsStore();

  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetchAnalytics();

    getOrders().then(setOrders);
  }, []);

  if (!metrics) return <div>Cargando...</div>;

  return (
    <DashboardLayout>
      <h1>Dashboard</h1>

      <KpiCards metrics={metrics} />

      <SalesChart orders={orders} />
    </DashboardLayout>
  );
}