import { useAuthStore } from "../../../store/auth.store";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <div />
      <div className="header-user">
        <span>{user?.name}</span>
        <button onClick={handleLogout}>Salir</button>
      </div>
    </header>
  );
}