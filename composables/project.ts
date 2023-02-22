import { getAPI } from "./getAPI";
import { ProjectDetail, ProjectList } from "~~/interfaces/project.interface";

export const getProjectList = async (
  page: number,
): Promise<{
  items: ProjectList[];
  count: number;
}> => {
  try {
    const { data } = await getAPI.get(`/project?page=${page}`);
    return data;
  } catch (e: any) {
    return e;
  }
};

export const getProjectListAll = async (): Promise<ProjectList[]> => {
  try {
    const { data } = await getAPI.get(`/project`);
    return data;
  } catch (e: any) {
    return e;
  }
};

export const getProjectDetail = async (id: string): Promise<ProjectDetail> => {
  try {
    const { data } = await getAPI.get(`/project/${id}`);
    return data;
  } catch (e: any) {
    return e;
  }
};
