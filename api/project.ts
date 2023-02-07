import { getAPI } from "~~/composables/getAPI";
import { CreateProject, ProjectList } from "~~/interfaces/project.interface";

export async function createProject(
  params: CreateProject,
): Promise<ProjectList> {
  const { data } = await getAPI("/api/Project", {
    method: "POST",
    data: params,
  });
  return data;
}
