import {
  AuthResponse,
  LoginCredentials,
  UserRegistration,
  User,
} from "@/types/user.types";
import {
  loginSuccess,
  loginFailure,
  loginStart,
  registerStart,
  registerSuccess,
  registerFailure,
} from "@/store/authStore";
import { vetMocks } from "@/shared/mocks/vet.mocks";
import { clinicMocks } from "@/shared/mocks/clinic.mocks";

// Simulated API responses with promises
const mockLogin = async (
  credentials: LoginCredentials
): Promise<AuthResponse> => {
  // Search in vets and clinics
  const foundVet = vetMocks.find(
    (vet) =>
      vet.email === credentials.email && vet.password === credentials.password
  );

  const foundClinic = clinicMocks.find(
    (clinic) =>
      clinic.email === credentials.email &&
      clinic.password === credentials.password
  );

  if (foundVet || foundClinic) {
    // Simulated successful login
    return {
      token: "mock-jwt-token-" + Date.now(),
      type: "Bearer",
    };
  }

  // Simulated failed login
  throw new Error("Invalid credentials");
};

const mockRegister = async (_data: UserRegistration): Promise<AuthResponse> => {
  // Simulated successful registration
  return {
    token: "mock-jwt-token-" + Date.now(),
    type: "Bearer",
  };
};

export const authApi = {
  // Login with mock data
  login: async (credentials: LoginCredentials) => {
    try {
      loginStart();
      const response = await mockLogin(credentials);

      // Find the user data to return
      const user = vetMocks.find((v) => v.email === credentials.email);
      if (user) {
        loginSuccess(
          {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password || "",
            role: "doctor",
            createdAt: user.createdAt || new Date().toISOString(),
          },
          response.token
        );
      } else {
        const clinic = clinicMocks.find((c) => c.email === credentials.email);
        if (clinic) {
          loginSuccess(
            {
              id: clinic.id,
              name: clinic.name,
              email: clinic.email,
              password: clinic.password || "",
              role: "clinic",
              createdAt: clinic.createdAt || new Date().toISOString(),
            },
            response.token
          );
        }
      }

      return response;
    } catch (error) {
      loginFailure((error as Error).message);
      throw error;
    }
  },

  // Register with mock data
  register: async (data: UserRegistration) => {
    try {
      registerStart();
      const response = await mockRegister(data);

      // Create a basic user from registration data
      const newUser: User = {
        id: `user-${Date.now()}`,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email || "",
        password: data.password || "",
        role: "doctor",
        createdAt: new Date().toISOString(),
      };

      registerSuccess(newUser, response.token);
      return response;
    } catch (error) {
      registerFailure((error as Error).message);
      throw error;
    }
  },

  // Verify token
  verifyToken: async () => {
    // Just return true for all mock tokens
    return { valid: true };
  },

  // Logout
  logout: async () => {
    // Just return success for mock
    return { success: true };
  },

  // For compatibility with the existing API
  refresh: async (_refreshToken: string) => {
    return {
      token: "mock-refresh-token-" + Date.now(),
      type: "Bearer",
    };
  },

  changePassword: async (_oldPassword: string, _newPassword: string) => {
    return {
      success: true,
    };
  },
};
