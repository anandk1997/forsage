import axios, { AxiosInstance } from "axios";
import { API_URL } from "src/Env";

let httpClient: AxiosInstance;

export const getHttpClient = (): AxiosInstance => {
  if (httpClient) return httpClient;

  httpClient = axios.create({
    baseURL: API_URL,
  });

  // httpClient.interceptors.request.use(
  //   function (config) {
  //     // Any status code that lie within the range of 2xx cause this function to trigger
  //     // Do something with response data
  //     console.log("REQUEST", config);

  //     return config;
  //   },
  //   function (error) {
  //     console.log('[error]', error);
  //     // Any status codes that falls outside the range of 2xx cause this function to trigger
  //     // Do something with response error

  //     return Promise.reject(error);
  //   }
  // );
  httpClient.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data

      if (response?.data?.redirect_url) {
        window.location.href = response?.data?.redirect_url;
      }

      return response;
    },
    function (error) {
      console.error("[error]", error);
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (error?.response?.data?.redirect_url) {
        window.location.replace(error?.response?.data?.redirect_url);
      }
      return Promise.reject(error);
    },
  );

  return httpClient;
};
