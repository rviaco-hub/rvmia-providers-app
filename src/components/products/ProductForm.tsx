import { useState } from "react";
import { createProduct, uploadImage } from "../../services/modules/product.service";

export default function ProductForm({ onCreated }: { onCreated: () => void }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let imageUrl = "";

    if (file) {
      imageUrl = await uploadImage(file);
    }

    await createProduct({
      name,
      price: Number(price),
      images: imageUrl ? [imageUrl] : [],
    });

    setName("");
    setPrice("");
    onCreated();
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <h3>Nuevo producto</h3>

      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />

      <button>Crear</button>
    </form>
  );
}