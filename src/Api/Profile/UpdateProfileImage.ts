import toast from "react-hot-toast";
import { authToken, axiosInstance } from "src/Lib/utils";

export const updateImageApi = async (
  payload: File,
): Promise<UpdateProfileResponse[]> => {
  try {
    const formData = new FormData();
    formData.append("file", payload);

    const { data } = await axiosInstance.post(`api/v1/file/upload`, formData, {
      ...authToken(),
    });

    toast.success(data.statusMessage);

    return data;
  } catch (error: any) {
    console.error(error);

    toast.error(error?.response?.data?.statusMessage);

    throw error;
  }
};

interface IUserProfile {
  _id: string;
  userId: number;
  sponsorId: number | null;
  directBusiness: number;
  teamBusiness: number;
  team: number;
  name: string;
  packageAmount: number;
  allPackages: any[];
  currentCycle: number;
  directsPackageWise: {
    twinty: number;
    fifty: number;
    hundered: number;
    twoHundered: number;
    fiveHundered: number;
  };
  cycleCount: {
    twinty: number;
    fifty: number;
    hundered: number;
    twoHundered: number;
    fiveHundered: number;
  };
  cycleLatestData: {
    twinty: number;
    fifty: number;
    hundered: number;
    twoHundered: number;
    fiveHundered: number;
  };
  profilePic: string;
  addresses: {
    ethAddress: string;
    otherAddress: string | null;
  };
  isActive: boolean;
  deviceType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  email: string;
  phone: number;
}

interface UpdateProfileResponse {
  statusCode: number;
  statusMessage: string;
  type: string;
  info: IUserProfile;
}
