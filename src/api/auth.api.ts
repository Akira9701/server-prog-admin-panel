import apiInstance from "./instance.api";

interface LoginData {
  login: string;
  password: string;
}

interface ChangePasswordData {
  oldPassword: string;
  newPassword: string;
}


interface VerifyTokenResponse {
  login: string;
  userType: string;
  name: string;
  surname: string;
  enabled: boolean;
}


interface RegisterData {
  login: string;
  password: string;
  email: string;
  name: string;
  surname: string;
  userType: string;    
}

interface AuthResponse {
  token: string;
  type: string;
}

export const authApi = {

  login: async (data: LoginData) => {
    const response = await apiInstance.post<AuthResponse>("/login", data);
    return response.data;
  },

  register: async (data: RegisterData) => {
    const response = await apiInstance.post<AuthResponse>(
      "/signup",
      data
    );
    return response.data;
  },

  logout: async () => {
    const response = await apiInstance.post("/logout");
    return response.data;
  },

  refresh: async (refreshToken: string) => {
    const response = await apiInstance.post<AuthResponse>("/refresh", { refreshToken });
    return response.data;
  },
  changePassword: async (oldPassword: string, newPassword: string) => {
    const response = await apiInstance.post<ChangePasswordData>("/change-password", { oldPassword, newPassword });
    return response.data;
  },
  verifyToken: async (token: string) => {
    const response = await apiInstance.post<VerifyTokenResponse>("/verify-token", { token });
    return response.data;
  },
};
