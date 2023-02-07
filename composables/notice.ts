import { getAPI } from "./getAPI";
import { NoticeDetail, NoticeList } from "~~/interfaces/notice.interface";

export const getNoticeList = async (page: number): Promise<NoticeList[]> => {
  try {
    const { data } = await getAPI.get(`/api/Notice?page=${page}`);
    return data;
  } catch (e: any) {
    return e;
  }
};

export const getNoticeListAll = async (): Promise<NoticeList[]> => {
  try {
    const { data } = await getAPI.get(`/api/Notice`);
    return data;
  } catch (e: any) {
    return e;
  }
};

export const getNoticeDetail = async (id: string): Promise<NoticeDetail> => {
  try {
    const { data } = await getAPI.get(`/api/Notice/${id}`);
    return data;
  } catch (e: any) {
    return e;
  }
};
