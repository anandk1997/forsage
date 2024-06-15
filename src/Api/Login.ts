import { AxiosResponse } from "axios";
import { axiosInstance } from "src/Lib/utils";

export const loginApi = async (
  payload: IPayload,
): Promise<AxiosResponse<LoginResponse>> => {
  try {
    const response = await axiosInstance.post("api/v1/auth/signin", payload);
    return response;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};

interface LoginResponse {
  statusCode: number;
  statusMessage: string;
  type: string;
  data: {
    token: string;
    isPreview: string;
  };
}

interface IPayload {
  address: FormDataEntryValue;
  loginType: string;
}
