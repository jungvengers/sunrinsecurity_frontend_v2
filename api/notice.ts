import { getAPI } from "~~/composables/getAPI";
import { CreateNotice, EditNotice } from "~~/interfaces/notice.interface";

export async function createNotice(params: CreateNotice): Promise<any> {
  const res = await getAPI("/notice", {
    method: "POST",
    data: params,
  }).catch((err) => err.response.data);
  return res;
}

export async function editNotice(id: number, params: EditNotice): Promise<any> {
  const res = await getAPI(`/notice/${id}`, {
    method: "PATCH",
    data: params,
  }).catch((err) => err.response.data);
  return res;
}
