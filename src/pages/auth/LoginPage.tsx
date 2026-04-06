import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../services/modules/auth.service";
import { useAuthStore } from "../../store/auth.store";

export default function LoginPage() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((s) => s.setAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await loginRequest({ email, password });
      setAuth(res.data.token, res.data.user);
      navigate("/dashboard");
    } catch {
      alert("Error login");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <h1>RVMIA Providers</h1>
      </div>

      <div className="auth-right">
        <form className="auth-card" onSubmit={handleLogin}>
          <h2>Iniciar sesión</h2>

          <input
            className="auth-input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-button">Entrar</button>

          <p
            className="auth-link"
            onClick={() => navigate("/register")}
          >
            Crear cuenta
          </p>
        </form>
      </div>
    </div>
  );
}