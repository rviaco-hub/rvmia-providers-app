export default function OrdersToolbar({
  setFilter,
}: {
  setFilter: (value: string) => void;
}) {
  return (
    <div className="toolbar">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">Todos</option>
        <option value="paid">Pagados</option>
        <option value="pending">Pendientes</option>
      </select>
    </div>
  );
}