import axios, { AxiosResponse } from "axios";
import { API_URL } from "src/Env";

export const signupApi = async (
  payload: IPayload
): Promise<AxiosResponse<SignupResponse>> => {
  try {
    const response = await axios.post(`${API_URL}api/v1/auth/signup`, payload);
    return response;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

interface SignupResponse {
  statusCode: number;
  statusMessage: string;
  type: string;
  data: {
    token: string;
  };
}

interface IPayload {
  address: FormDataEntryValue;
  sponsorId: FormDataEntryValue;
}
