import { useMutation, useQuery } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";
import { useLocation } from "react-router-dom";

import { getProfileApi } from "src/Api/Profile/GetProfile";
import { updateProfileApi } from "src/Api/Profile/UpdateProfile";
import { updateImageApi } from "src/Api/Profile/UpdateProfileImage";

export const useProfile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { key } = useLocation();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { isPending, data, refetch } = useQuery({
    queryKey: ["profile", key],
    queryFn: () => getProfileApi(setUserData),
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    const { value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const updateProfileMutation = useMutation({
    mutationFn: async () => {
      await updateProfileApi(userData);
      refetch();
    },
  });

  const updateImageMutation = useMutation({
    mutationFn: async () => {
      await updateImageApi(selectedFile!);
      refetch();
    },
  });

  const updateProfile = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateProfileMutation.mutate();
  };

  const updateImage = (e: any) => {
    if (!e.target.files[0]) return;

    setSelectedFile(e.target.files[0]);

    updateImageMutation.mutate();
  };

  return {
    isPending,
    data: data?.data,
    userData,
    onChange,
    updateProfile,
    updating: updateProfileMutation.isPending,
    uploading: updateImageMutation.isPending,
    updateImage,
  };
};
