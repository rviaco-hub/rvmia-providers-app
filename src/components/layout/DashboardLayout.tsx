import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout-main">
        <Header />
        <div className="layout-content">{children}</div>
      </div>
    </div>
  );
}