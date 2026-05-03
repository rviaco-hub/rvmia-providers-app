import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api/api";
import { validateRegister } from "../../utils/validate";

import img1 from "../../assets/buystore1.png";
import img2 from "../../assets/buystore2.png";
import img3 from "../../assets/buystore3.png";

const images = [img1, img2, img3];

export default function RegisterPage() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "provider",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const errorMsg = validateRegister(
      form.name,
      form.email,
      form.password
    );

    if (errorMsg) {
      alert(errorMsg);
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(
        "/auth/register",
        form
      );

      console.log("REGISTER RESPONSE:", response.data);

      alert("Cuenta creada correctamente");
      navigate("/");
    } catch (err: any) {
      console.error(err);

      alert(
        err.response?.data?.message ||
          "Error al registrar proveedor"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {/* LEFT */}
      <section className="auth-left">
        <img
          src={images[current]}
          alt="showcase"
          key={current}
          className="auth-image"
        />
      </section>

      {/* RIGHT */}
      <section className="auth-right">
        <form
          className="auth-card"
          onSubmit={handleRegister}
        >
          <div className="auth-header">
            <span className="auth-badge">
              Nuevo proveedor
            </span>

            <h2>Crear cuenta</h2>

            <p className="auth-subtitle">
              Registra tu empresa y accede al portal
              corporativo RVMIA Providers
            </p>
          </div>

          <input
            className="auth-input"
            name="name"
            placeholder="Nombre o empresa"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className="auth-input"
            name="email"
            type="email"
            placeholder="Correo corporativo"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Contraseña segura"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button
            className="auth-button"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Creando cuenta..."
              : "Registrarme"}
          </button>

          <p
            className="auth-link"
            onClick={() => navigate("/")}
          >
            Ya tengo cuenta
          </p>
        </form>
      </section>
    </div>
  );
}