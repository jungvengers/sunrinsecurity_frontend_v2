import { getAPI } from "~~/composables/getAPI";
import { CreateNotice, NoticeDetail } from "~~/interfaces/notice.interface";

export async function createNotice(
  params: CreateNotice,
): Promise<NoticeDetail> {
  const { data } = await getAPI("/Notice", {
    method: "POST",
    data: params,
  });
  return data;
}
