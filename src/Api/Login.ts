import axios, { AxiosResponse } from "axios";
import { API_URL } from "src/Env";

export const loginApi = async (
  payload: IPayload,
): Promise<AxiosResponse<LoginResponse>> => {
  try {
    const response = await axios.post(`${API_URL}api/v1/auth/signin`, payload);
    return response;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

interface LoginResponse {
  statusCode: number;
  statusMessage: string;
  type: string;
  data: {
    token: string;
  };
}

interface IPayload {
  address: FormDataEntryValue;
  loginType: string;
}
