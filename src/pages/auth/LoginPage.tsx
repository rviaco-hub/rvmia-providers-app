import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../services/modules/auth.service";
import { useAuthStore } from "../../store/auth.store";
import { validateLogin } from "../../utils/validate";

import img1 from "../../assets/buystore1.png";
import img2 from "../../assets/buystore2.png";
import img3 from "../../assets/buystore3.png";

const images = [img1, img2, img3];

export default function LoginPage() {
  const navigate = useNavigate();

  const setAuth = useAuthStore((s) => s.setAuth);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const errorMsg = validateLogin(email, password);

    if (errorMsg) {
      alert(errorMsg);
      return;
    }

    try {
      setLoading(true);

      const res = await loginRequest({
        email,
        password,
      });

      setAuth(res.data.token, res.data.user);

      navigate("/dashboard");
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
          "Error al iniciar sesión"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {/* LEFT - SLIDER */}
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
        <form className="auth-card" onSubmit={handleLogin}>
          <div className="auth-header">
            <span className="auth-badge">
              Bienvenido
            </span>

            <h2>Iniciar sesión</h2>

            <p className="auth-subtitle">
              Accede al portal de proveedores RVMIA
            </p>
          </div>

          <input
            className="auth-input"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            className="auth-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <p
            className="auth-link"
            onClick={() => navigate("/register")}
          >
            Crear cuenta
          </p>
        </form>
      </section>
    </div>
  );
}