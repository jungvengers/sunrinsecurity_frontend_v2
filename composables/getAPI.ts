import axios from "axios";

// eslint-disable-next-line no-undef
const config = useRuntimeConfig();

export const getAPI = axios.create({
  baseURL: config.public.BaseUrl,
  withCredentials: true,
});
