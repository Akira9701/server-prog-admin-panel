import apiInstance from "./instance.api";

export const userApi = {
  getUsers: async () => {
    const response = await apiInstance.get("/users");
    return response.data;
  },
};
