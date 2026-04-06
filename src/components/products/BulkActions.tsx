import { useProductStore } from "../../store/product.store";
import { deleteProductsBulk } from "../../services/modules/product.service";

export default function BulkActions({ refresh }: { refresh: () => void }) {
  const { selected, clearSelection } = useProductStore();

  const handleDelete = async () => {
    if (!selected.length) return;

    await deleteProductsBulk(selected);
    clearSelection();
    refresh();
  };

  return (
    <div className="bulk">
      <span>{selected.length} seleccionados</span>
      <button onClick={handleDelete}>Eliminar seleccionados</button>
    </div>
  );
}