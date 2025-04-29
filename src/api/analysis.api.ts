import apiInstance from "./instance.api";

export const analysisApi = {
  getAnalysis: async () => {
    const response = await apiInstance.get("/analysis");
    return response.data;
  },
};
