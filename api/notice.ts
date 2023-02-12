import { getAPI } from "~~/composables/getAPI";
import { CreateNotice } from "~~/interfaces/notice.interface";

export async function createNotice(params: CreateNotice): Promise<any> {
  const res = await getAPI("/Notice", {
    method: "POST",
    data: params,
  });
  return res;
}
