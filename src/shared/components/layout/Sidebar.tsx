import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const menu = [
  { name: "Dashboard", path: "/" },
  { name: "Productos", path: "/products" },
  { name: "Órdenes", path: "/orders" },
  { name: "Usuarios", path: "/users" },
];

export default function Sidebar({ open }: { open: boolean }) {
  const { pathname } = useLocation();

  return (
    <aside
      className={clsx(
        "bg-gray-900 text-white h-screen fixed top-0 left-0 z-40 transition-all",
        open ? "w-64" : "w-16"
      )}
    >
      <div className="p-4 font-bold text-lg">RVMIA</div>

      <nav className="flex flex-col gap-2 p-2">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={clsx(
              "p-2 rounded hover:bg-gray-700",
              pathname === item.path && "bg-gray-700"
            )}
          >
            {open ? item.name : item.name[0]}
          </Link>
        ))}
      </nav>
    </aside>
  );
}