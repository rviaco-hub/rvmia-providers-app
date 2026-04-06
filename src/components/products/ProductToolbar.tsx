import { useProductStore } from "../../store/product.store";

export default function ProductToolbar() {
  const search = useProductStore((s) => s.search);

  return (
    <div className="toolbar">
      <input
        placeholder="Buscar producto..."
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
}