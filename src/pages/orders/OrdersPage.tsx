import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getOrders } from "../../services/modules/order.service";
import { Order } from "../../types/order.types";
import OrdersTable from "../../components/orders/OrdersTable";
import OrdersToolbar from "../../components/orders/OrdersToolbar";

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filtered, setFiltered] = useState<Order[]>([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getOrders();
    setOrders(data);
    setFiltered(data);
  };

  const handleFilter = (status: string) => {
    if (!status) return setFiltered(orders);

    setFiltered(orders.filter((o) => o.status === status));
  };

  return (
    <DashboardLayout>
      <h1>Órdenes</h1>

      <OrdersToolbar setFilter={handleFilter} />

      <OrdersTable orders={filtered} />
    </DashboardLayout>
  );
}