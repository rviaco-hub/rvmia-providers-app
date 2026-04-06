import { Product } from "../../types/product.types";
import { useProductStore } from "../../store/product.store";

export default function ProductTable({
  products,
  onDelete,
}: {
  products: Product[];
  onDelete: (id: string) => void;
}) {
  const { toggleSelect, selected } = useProductStore();

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Nombre</th>
          <th>Precio</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p._id}>
            <td>
              <input
                type="checkbox"
                checked={selected.includes(p._id)}
                onChange={() => toggleSelect(p._id)}
              />
            </td>

            <td>{p.name}</td>
            <td>${p.price}</td>

            <td>
              <button onClick={() => onDelete(p._id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}