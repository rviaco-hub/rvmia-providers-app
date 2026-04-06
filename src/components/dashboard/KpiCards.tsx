import { Metrics } from "../../types/analytics.types";

export default function KpiCards({ metrics }: { metrics: Metrics }) {
  return (
    <div className="cards">
      <div className="card">
        <h4>Ventas</h4>
        <p>${metrics.totalSales}</p>
      </div>

      <div className="card">
        <h4>Órdenes</h4>
        <p>{metrics.totalOrders}</p>
      </div>

      <div className="card">
        <h4>Productos</h4>
        <p>{metrics.totalProducts}</p>
      </div>

      <div className="card">
        <h4>Ticket promedio</h4>
        <p>${metrics.averageTicket.toFixed(2)}</p>
      </div>
    </div>
  );
}