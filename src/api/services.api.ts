import apiInstance from "./instance.api";

export const servicesApi = {
  getServices: async () => {
    const response = await apiInstance.get("/services");
    return response.data;
  },
};
