import { getAPI } from "./getAPI";
import { QuestionList } from "~~/interfaces/apply.interface";

export const getQuestionList = async (id: number): Promise<QuestionList> => {
  try {
    const { data } = await getAPI.get(`/form/${id}`);
    return data;
  } catch (e: any) {
    return e;
  }
};
