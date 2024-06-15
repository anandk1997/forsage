import { authToken, axiosInstance } from "src/Lib/utils";

export const getDashboard = async () => {
  try {
    const response = await axiosInstance.get("api/v1/dashboard", authToken());

    return response?.data;
  } catch (error) {
    console.error("error while getting dashboard data", error);
  }
};
