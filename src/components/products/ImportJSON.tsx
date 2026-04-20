import { useState } from "react";
import { api } from "../../services/api/api";

export default function ImportJSON({ refresh }: { refresh: () => void }) {
  const [file, setFile] = useState<File | null>(null);

  const handleImport = async () => {
    if (!file) return;

    const text = await file.text();

    try {
      const json = JSON.parse(text);

      await api.post("/products/import/json", json);

      alert("Productos importados ✅");
      setFile(null);
      refresh();
    } catch (err) {
      console.error(err);
      alert("JSON inválido ❌");
    }
  };

  return (
    <div className="card">
      <h3>Importar JSON</h3>

      <input
        type="file"
        accept=".json"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={handleImport}>
        Importar archivo
      </button>
    </div>
  );
}