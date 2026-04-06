import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api/api";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "provider",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", form);
      alert("Usuario creado");
      navigate("/");
    } catch (err) {
      alert("Error al registrar");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>RVMIA Providers</h1>
      </div>

      <div className="auth-right">
        <form className="auth-card" onSubmit={handleRegister}>
          <h2>Crear cuenta</h2>

          <input
            className="auth-input"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
          />

          <input
            className="auth-input"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button className="auth-button">Registrarse</button>

          <p className="auth-link" onClick={() => navigate("/")}>
            Ya tengo cuenta
          </p>
        </form>
      </div>
    </div>
  );
}