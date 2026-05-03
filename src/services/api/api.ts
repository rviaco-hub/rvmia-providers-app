import axios from "axios";
import { useAuthStore } from "../../store/auth.store";
import { ENDPOINTS } from "./endpoints";

export const api = axios.create({
  baseURL: ENDPOINTS.SERVER,
});

api.interceptors.request.use((config) => {

  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log(token);
  

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    
    if (error.response?.status === 400) {
      useAuthStore.getState().logout();
      window.location.href = "/";
    }

    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = "/";
    }
    
    if (error.response?.status === 403) {
      console.warn("No autorizado (rol)");
    }

    return Promise.reject(error);
  }
);