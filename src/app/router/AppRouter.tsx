import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/auth/LoginPage";
import RegisterPage from "../../pages/auth/RegisterPage";
import DashboardPage from "../../pages/dashboard/DashboardPage";
import ProtectedRoute from "./ProtectedRoute";
import ProductsPage from "../../pages/products/ProductsPage";
import OrdersPage from "../../pages/orders/OrdersPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}