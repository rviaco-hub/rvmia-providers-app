import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Menu,
  ChevronLeft,
} from "lucide-react";

import logo from '../../assets/3-removebg-preview.png'

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(
    window.innerWidth <= 768
  );

  const handleNavigate = () => {
    if (window.innerWidth <= 768) {
      setCollapsed(true);
    }
  };

  return (
    <div className={`dashboard ${collapsed ? "collapsed" : ""}`}>

      <button
        className="mobile-toggle"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <Menu size={24} /> : <ChevronLeft size={24} />}
      </button>



      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="p-4 flex justify-center">
            <div className="bg-white/5 rounded-2xl p-3 backdrop-blur-sm">
              <img
                className={
                  collapsed ? "logoMovil" : "logo"
                }
                src={logo}
                alt="RVMIA"
              />
              <button
                className="toggle-btn"
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? <Menu size={22} /> : <ChevronLeft size={22} />}
              </button>
            </div>
          </div>

        </div>

        <nav className="nav">
          <NavLink to="/dashboard" onClick={handleNavigate}>
            <LayoutDashboard size={20} />
            {!collapsed && <span>Dashboard</span>}
          </NavLink>

          <NavLink to="/products" onClick={handleNavigate}>
            <Package size={20} />
            {!collapsed && <span>Productos</span>}
          </NavLink>

          <NavLink to="/orders" onClick={handleNavigate}>
            <ShoppingCart size={20} />
            {!collapsed && <span>Órdenes</span>}
          </NavLink>
        </nav>
      </aside>

      <main className="content">{children}</main>
    </div>
  );
}