import { getAPI } from "~~/composables/getAPI";
import { CreateProject, EditProject } from "~~/interfaces/project.interface";

export async function createProject(params: CreateProject): Promise<any> {
  const res = await getAPI("/project", {
    method: "POST",
    data: params,
  }).catch((err) => err.response.data);
  return res;
}

export async function editProject(
  id: number,
  params: EditProject,
): Promise<any> {
  const res = await getAPI(`/project/${id}`, {
    method: "PATCH",
    data: params,
  }).catch((err) => err.response.data);
  return res;
}

export async function deleteProject(id: number): Promise<any> {
  const res = await getAPI(`/project/${id}`, {
    method: "DELETE",
  }).catch((err) => err.response.data);
  return res;
}

export async function uploadFile(params: FormData): Promise<{ url: string }> {
  const { data } = await getAPI("https://cdn.sunrin-security.com/upload", {
    method: "POST",
    data: params,
  }).catch((err) => err.response.data);
  return data.location;
}
