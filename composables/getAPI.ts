import axios from "axios";

const config = useRuntimeConfig();

export const getAPI = axios.create({
  baseURL: config.public.BaseUrl,
  withCredentials: true,
});
