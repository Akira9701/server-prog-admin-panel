import apiInstance from "./instance.api";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  name: string;
  role?: string;
}

interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

export const authApi = {
  login: async (data: LoginData) => {
    const response = await apiInstance.post<AuthResponse>("/auth/login", data);
    return response.data;
  },

  register: async (data: RegisterData) => {
    const response = await apiInstance.post<AuthResponse>(
      "/auth/register",
      data
    );
    return response.data;
  },
};
