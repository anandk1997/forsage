import { authToken, axiosInstance } from "src/Lib/utils";

export const checkLevel = async (price: number) => {
  try {
    const data = {
      price,
    };

    const response = await axiosInstance.post(
      "api/v1/dashboard/checkLevelIncome",
      data,

      authToken(),
    );

    const finalObject = {
      address: response?.data?.address,
      amount: response?.data?.amount,
      uniqueId: response?.data?.uniqueId,
    };

    return finalObject;
  } catch (error) {
    console.log(error);
  }
};
