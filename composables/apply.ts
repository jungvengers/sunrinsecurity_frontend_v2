import { getAPI } from "./getAPI";
import { ApplyList, Answer, Form } from "~~/interfaces/apply.interface";

export const getQuestionList = async (id: number): Promise<Form> => {
  try {
    const { data } = await getAPI.get(`/form/${id}`);
    return data;
  } catch (e: any) {
    return e;
  }
};

export const getApplyList = async (): Promise<ApplyList[]> => {
  try {
    const { data } = await getAPI.get(`/application`);
    return data;
  } catch (e: any) {
    return e;
  }
};

export const getAnswer = async (id: number): Promise<Answer> => {
  try {
    const { data } = await getAPI.get(`/application/${id}`);
    return data;
  } catch (e: any) {
    return e;
  }
};
