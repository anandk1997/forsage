import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FormEvent } from "react";

import { useStore } from "src/Store/Store";
import { signupApi } from "src/Api/Signup";

export const useSignup = () => {
  const navigate = useNavigate();

  const { walletAddress } = useStore((state) => state);

  const { mutate, isPending } = useMutation({
    mutationFn: signupApi,

    onSuccess: (res) => {
      localStorage.setItem("user", JSON.stringify(res?.data?.data?.token));
      toast.success(res?.data?.statusMessage);
      navigate("/dashboard");
    },

    onError: (res: any) => {
      toast.error(res?.response?.data?.statusMessage);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!!walletAddress) {
      toast.error("Please connect to your wallet");
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const sponsorId = formData.get("sponsorId");

    if (!sponsorId) {
      toast.error("Please enter id");
      return;
    }

    mutate({ address: walletAddress, sponsorId });

    (e.target as HTMLFormElement).reset();
  };

  return { isPending, handleSubmit };
};
