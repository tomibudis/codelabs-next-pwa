import axios, { AxiosRequestConfig } from "axios";

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

customAxios.interceptors.request.use((config: AxiosRequestConfig) => {
  // custom token or headers here...
  return config;
});

export default customAxios;
