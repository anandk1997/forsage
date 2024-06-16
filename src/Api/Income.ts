import { authToken, axiosInstance } from "src/Lib/utils";

export const incomeApi = async (
  payload: IPayload,
): Promise<IncomeResponse[]> => {
  try {
    const response = await axiosInstance.get(
      `api/v1/incomes/${payload.incomeType}`,
      {
        params: {
          // page: payload.page,
          skip: payload.page,
          limit: "10",
        },

        ...authToken(),
      },
    );

    const pageCount = Math.ceil(response.data.totalCount / 10);
    payload.setPageCount(pageCount);

    return response.data.data;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};

interface IncomeResponse {
  statusCode: number;
  statusMessage: string;
  type: string;
  data: any[];
  totalCount: number;
}

interface IPayload {
  page: number;
  skip: number;

  incomeType: string;

  setPageCount: (count: number) => void;
}
