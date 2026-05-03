import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../services/modules/auth.service";
import { useAuthStore } from "../../store/auth.store";

import img1 from "../../assets/buystore1.png";
import img2 from "../../assets/buystore2.png";
import img3 from "../../assets/buystore3.png";

const images = [img1, img2, img3];

export default function LoginPage() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((s) => s.setAuth);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await loginRequest({
        email,
        password,
      });

      setAuth(res.data.token, res.data.user);
      navigate("/dashboard");
    } catch (error) {
      alert("Credenciales inválidas");
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
          />
        
      </section>

      {/* RIGHT */}
      <section className="auth-right">
        <form className="auth-card" onSubmit={handleLogin}>
          <div className="auth-header">
            <span className="auth-badge">
              Portal de Proveedores
            </span>

            <h2>Bienvenido</h2>

            <p className="auth-subtitle">
              Accede a tu entorno empresarial
            </p>
          </div>

          <input
            className="auth-input"
            type="email"
            placeholder="Correo corporativo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            className="auth-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>

          <p
            className="auth-link"
            onClick={() => navigate("/register")}
          >
            Crear cuenta de proveedor
          </p>
        </form>
      </section>
    </div>
  );
}