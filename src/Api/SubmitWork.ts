import toast from "react-hot-toast";
import { authToken, axiosInstance } from "src/Lib/utils";

export const submitWork = async (
  price: any,
  uniqueId: any,
  transactionHash: any,
) => {
  try {
    const data = {
      price,
      uniqueId,
      transactionHash,
    };

    const response = await axiosInstance.post(
      "api/v1/dashboard/submitWorking",
      data,

      authToken(),
    );

    toast.success(response?.data?.statusMessage);
    window.location.href = "/dashboard";

    return response?.data;
  } catch (error: any) {
    toast.error(error.response?.data?.statusMessage);
    window.location.href = "/dashboard";
  }
};
