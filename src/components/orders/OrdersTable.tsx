import { Order } from "../../types/order.types";
import StatusBadge from "../ui/StatusBadge";

export default function OrdersTable({ orders }: { orders: Order[] }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Total</th>
          <th>Items</th>
          <th>Estado</th>
          <th>Fecha</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((o, i) => (
          <tr key={o._id}>
            <td>{i + 1}</td>
            <td>${o.total}</td>
            <td>{o.items?.length || 0}</td>
            <td>
              <StatusBadge status={o.status} />
            </td>
            <td>
              {o.createdAt
                ? new Date(o.createdAt).toLocaleDateString()
                : "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}