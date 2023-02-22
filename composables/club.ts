import { getAPI } from "./getAPI";
import { ClubList } from "~~/interfaces/club.interface";

export const getClubList = async (): Promise<ClubList[]> => {
  try {
    const { data } = await getAPI.get(`/club`);
    return data;
  } catch (e: any) {
    return e;
  }
};
