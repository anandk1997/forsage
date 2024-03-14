import { type ClassValue, clsx } from "clsx";
import { getHttpClient } from "src/Api/HttpClient";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authToken = () => {
  const token = localStorage.getItem("user");
  if (!token) return;

  const [, tokenPart] = token.split('"');

  return {
    headers: {
      Authorization: `Bearer ${tokenPart}`,
    },
  };
};

export const axiosInstance = getHttpClient();
