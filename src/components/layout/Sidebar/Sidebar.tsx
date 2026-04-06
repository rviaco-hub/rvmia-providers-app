import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">RVMIA</h2>

      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products">Productos</Link>
        <Link to="/orders">Órdenes</Link>
      </nav>
    </aside>
  );
}