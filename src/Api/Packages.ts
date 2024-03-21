import { authToken, axiosInstance } from "src/Lib/utils";

export const getPackages = async () => {
  try {
    const response = await axiosInstance.get(
      "api/v1/packagesList?skip=0&limit=20",
      authToken(),
    );

    return response?.data;
  } catch (error) {
    console.log("error while getting package", error);
  }
};
