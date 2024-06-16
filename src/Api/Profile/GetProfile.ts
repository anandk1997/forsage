import toast from "react-hot-toast";
import { authToken, axiosInstance } from "src/Lib/utils";

export const getProfileApi = async (
  setUserData: React.Dispatch<React.SetStateAction<UserData>>,
): Promise<ProfileResponse> => {
  try {
    const response = await axiosInstance.get(`api/v1/profile`, {
      ...authToken(),
    });

    const data = response.data.data;

    setUserData({
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
    });

    return response.data;
  } catch (error: any) {
    console.error(error);

    toast.error(error?.response?.data?.statusMessage);

    throw error;
  }
};

interface UserData {
  name: string;
  email: string;
  phone: string;
}

interface IUser {
  _id: string;
  userId: number;
  sponsorId: string | null;
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

interface ProfileResponse {
  statusCode: number;
  statusMessage: string;
  type: string;
  data: IUser;
  totalCount: number;
}
