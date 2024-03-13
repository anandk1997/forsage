import axios, { AxiosResponse } from "axios";

export const signupApi = async (
  payload: IPayload,
): Promise<AxiosResponse<SignupResponse>> => {
  try {
    const response = await axios.post(`/api/v1/auth/signup`, payload);
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
