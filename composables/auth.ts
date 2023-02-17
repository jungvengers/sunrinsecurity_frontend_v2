import { getAPI } from "./getAPI";

export const getAccessToken = async (): Promise<{ accessToken: String }> => {
  try {
    const { data } = await getAPI.get(`/auth/refresh`);
    getAPI.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${data.accessToken}`;
    return data;
  } catch (e: any) {
    return e;
  }
};
