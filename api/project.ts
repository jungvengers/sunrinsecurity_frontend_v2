import { getAPI } from "~~/composables/getAPI";
import { CreateProject } from "~~/interfaces/project.interface";

export async function createProject(params: CreateProject): Promise<any> {
  const res = await getAPI("/Project", {
    method: "POST",
    data: params,
  }).catch((err) => err.response.data);
  return res;
}
