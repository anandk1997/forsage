import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { getDashboard } from "src/Api/Dashboard";
import { getPackages } from "src/Api/Packages";
import { useStore } from "src/Store/Store";

export const useDashboard = () => {
  const { setUserInfo } = useStore();

  const { data: dashboardData } = useQuery({
    queryKey: ["dashboard"],
    queryFn: () => getDashboard(setUserInfo),
  });

  const { data: packages } = useQuery({
    queryKey: ["packages"],
    queryFn: getPackages,
  });

  const userInfo = dashboardData?.userInfo?.[0];

  const workingPackages = packages?.packages;
  const matrixPackages = packages?.matrixPackages;

  const ethAddress = userInfo?.addresses?.ethAddress;

  const copyToClipboard = (e: any) => {
    const copyText = e.target.value || ethAddress;

    navigator.clipboard
      .writeText(copyText)
      .then(() => toast.success("Text copied to clipboard!"))
      .catch((err) => {
        console.error("Could not copy text: ", err);
        toast.error("Failed to copy text to clipboard");
      });
  };

  return {
    dashboardData,
    packages,

    userInfo,
    workingPackages,
    matrixPackages,
    ethAddress,

    copyToClipboard,
  };
};
