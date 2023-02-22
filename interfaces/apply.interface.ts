import { ClubData } from "~~/interfaces/club.interface";

export interface QuestionList {
  clubid: number;
  questions: string[];
}

export interface FormAnswer {
  clubid: number;
  [key: string]: string | number;
}

export interface ApplyList {
  [key: string]: string | object;
  club: {
    name: string;
  };
}

export interface Answer {
  [key: string]: string;
}
