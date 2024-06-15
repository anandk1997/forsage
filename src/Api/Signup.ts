import { AxiosResponse } from "axios";
import { axiosInstance } from "src/Lib/utils";

export const signupApi = async (
  payload: IPayload,
): Promise<AxiosResponse<SignupResponse>> => {
  try {
    const response = await axiosInstance.post("api/v1/auth/signup", payload);
    return response;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};

interface SignupResponse {
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
  sponsorId: FormDataEntryValue;
  uniqueId: FormDataEntryValue;
  transactionHash: FormDataEntryValue;
}
