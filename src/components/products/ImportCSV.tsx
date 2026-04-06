import { useState } from "react";
import { api } from "../../services/api/api";

export default function ImportCSV({ refresh }: { refresh: () => void }) {
  const [text, setText] = useState("");

  const handleImport = async () => {
    await api.post("/products/import/csv", { csv: text });
    setText("");
    refresh();
  };

  return (
    <div className="card">
      <h3>Importar CSV</h3>

      <textarea
        placeholder="name,price\nproducto1,10"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleImport}>Importar</button>
    </div>
  );
}