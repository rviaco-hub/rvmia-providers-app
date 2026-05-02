import { api } from "../api/api";
import { ENDPOINTS } from "../api/endpoints";
import { LoginRequest, LoginResponse } from "../../types/auth.types";

export const loginRequest = async (data: LoginRequest) => {
  console.log("LG1. ",data,);
  
  const response = await api.post<LoginResponse>(
    ENDPOINTS.AUTH.LOGIN,
    data
  );
  console.log(`SV3. ${response}`);
  
  return response.data;
};

export const logoutRequest = async () => {
  const response = await api.post(ENDPOINTS.AUTH.LOGOUT);
  return response.data;
};