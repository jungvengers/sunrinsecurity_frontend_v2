import { getAPI } from "./getAPI";
import { ClubList } from "~~/interfaces/department.interface";

export const getClubList = async (): Promise<ClubList> => {
  try {
    const { data } = await getAPI.get(`/department`);
    return data;
  } catch (e: any) {
    return e;
  }
};
