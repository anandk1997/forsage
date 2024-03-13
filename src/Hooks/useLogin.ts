import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FormEvent } from "react";

import { useStore } from "src/Store/Store";
import { loginApi } from "src/Api/Login";

export const useLogin = () => {
  const navigate = useNavigate();

  const { walletAddress } = useStore((state) => state);

  const { mutate, isPending } = useMutation({
    mutationFn: loginApi,

    onSuccess: (res) => {
      localStorage.setItem("user", JSON.stringify(res?.data?.data?.token));
      toast.success(res?.data?.statusMessage);
      navigate("/dashboard");
    },

    onError: (res: any) => {
      toast.error(res?.response?.data?.statusMessage);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>, loginType: string) => {
    e.preventDefault();

    if (!!!walletAddress) {
      toast.error("Please connect to your wallet");
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const address = formData.get("address");

    if (loginType === "id" && !address) {
      toast.error("Please enter id");
      return;
    }

    mutate({ address: address || walletAddress, loginType });

    (e.target as HTMLFormElement).reset();
  };

  return { isPending, handleSubmit };
};
