import { getAPI } from "./getAPI";

export const getAdmin = async (): Promise<any> => {
  try {
    const { data } = await getAPI.get(`/admin`);
    return data;
  } catch (e: any) {
    return { role: "none" };
  }
};
