import { authToken, axiosInstance } from "src/Lib/utils";

export const getDashboard = async (
  setUserInfo: (newUserInfo: object) => void,
) => {
  try {
    const response = await axiosInstance.get("api/v1/dashboard", authToken());

    setUserInfo(response?.data?.userInfo[0]);

    return response?.data;
  } catch (error) {
    console.log("error while getting dashboard data", error);
  }
};
