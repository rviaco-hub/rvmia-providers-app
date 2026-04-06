export default function StatusBadge({ status }: { status?: string }) {
  const color =
    status === "paid"
      ? "green"
      : status === "pending"
      ? "orange"
      : "gray";

  return (
    <span className={`badge badge-${color}`}>
      {status || "unknown"}
    </span>
  );
}