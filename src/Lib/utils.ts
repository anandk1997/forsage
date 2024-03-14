import { type ClassValue, clsx } from "clsx";
import { getHttpClient } from "src/Api/HttpClient";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authToken = () => {
  const token = localStorage.getItem("user");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const axiosInstance = getHttpClient();
