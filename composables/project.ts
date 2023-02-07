import { getAPI } from "./getAPI";
import { ProjectList } from "~~/interfaces/project.interface";

export const getProjectList = async (page: number): Promise<ProjectList[]> => {
  try {
    const { data } = await getAPI.get(`/api/Project?page=${page}`);
    return data;
  } catch (e: any) {
    return e;
  }
};

export const getProjectListAll = async (): Promise<ProjectList[]> => {
  try {
    const { data } = await getAPI.get(`/api/Project`);
    return data;
  } catch (e: any) {
    return e;
  }
};
