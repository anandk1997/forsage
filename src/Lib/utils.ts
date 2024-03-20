import { type ClassValue, clsx } from "clsx";
import { getHttpClient } from "src/Api/HttpClient";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};


export const maskHex = (input: string) => {
  if (typeof input !== "string" || !/^0x[0-9a-fA-F]+$/.test(input)) {
    throw new Error("Invalid hexadecimal input");
  }

  const firstFour = input.slice(0, 4);
  const lastFour = input.slice(-4);
  const masked = `${firstFour}****${lastFour}`;

  return masked;
};

export const axiosInstance = getHttpClient();
