import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SalesChart({ orders }: { orders: any[] }) {
  const data = orders.map((o, i) => ({
    name: `#${i + 1}`,
    total: o.total || 0,
  }));

  return (
    <div className="card">
      <h3>Ventas</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}