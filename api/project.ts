import { getAPI } from "~~/composables/getAPI";
import { CreateProject, ProjectList } from "~~/interfaces/project.interface";

export async function createProject(params: CreateProject): Promise<any> {
  const res = await getAPI("/Project", {
    method: "POST",
    data: params,
  });
  return res;
}
