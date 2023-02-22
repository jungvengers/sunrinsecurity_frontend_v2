import { getAPI } from "~~/composables/getAPI";
import { FormAnswer } from "~~/interfaces/apply.interface";

export async function createAnswer(params: FormAnswer): Promise<any> {
  const res = await getAPI("/application", {
    method: "POST",
    data: params,
  }).catch((err) => err.response.data);
  return res;
}

export async function editAnswer(id: number, params: FormAnswer): Promise<any> {
  const res = await getAPI(`/application/${id}`, {
    method: "PATCH",
    data: params,
  }).catch((err) => err.response.data);
  return res;
}

export async function deleteAnswer(id: number): Promise<any> {
  const res = await getAPI(`/application/${id}`, {
    method: "DELETE",
  }).catch((err) => err.response.data);
  return res;
}
