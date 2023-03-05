import { getAPI } from "./getAPI";
import { Apply, Answer, Form } from "~~/interfaces/apply.interface";
import { AxiosError } from "axios";

export const getQuestionList = async (
  id: number,
): Promise<Form | AxiosError> => {
  const res = await getAPI
    .get(`/form/${id}`)
    .then((res) => res.data)
    .catch((e) => e);
  return res;
};

export const getApplyList = async (): Promise<Apply[] | AxiosError> => {
  const res = await getAPI
    .get(`/application`)
    .then((res) => res.data)
    .catch((e) => e);
  return res;
};

export const getApplyOfClubList = async (id: number): Promise<Apply[]> => {
  const res = await getAPI
    .get(`/application/${id}/admin`)
    .then((res) => res.data);
  return res;
};

export const getAnswer = async (id: number): Promise<Answer> => {
  try {
    const { data } = await getAPI.get(`/application/${id}`);
    return data;
  } catch (e: any) {
    return e;
  }
};
