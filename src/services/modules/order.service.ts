import { api } from "../api/api";
import { useAuthStore } from "../../store/auth.store";

export const getOrders = async () => {
  const user = useAuthStore.getState().user;

  if (!user) throw new Error("No user");

  // 🔥 lógica por rol
  const endpoint =
    user.role === "admin" ? "/orders" : "/orders/me";

  const res = await api.get(endpoint);

  return res.data.data;
};