import { useEffect } from "react";
import AppRouter from "./app/router/AppRouter";
import { useAuthStore } from "./store/auth.store";

export default function App() {
  const hydrate = useAuthStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, []);

  return <AppRouter />;
}