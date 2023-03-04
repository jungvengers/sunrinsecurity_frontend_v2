import { Club, ClubData } from "~~/interfaces/club.interface";

export interface Form {
  id: number;
  club: Club;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  question7: string;
  question8: string;
  question9: string;
  question10: string;
}

export interface UpdateForm {
  clubid: number;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  question7: string;
  question8: string;
  question9: string;
  question10: string;
}

export type Question = {
  [key in typeof Questions[number]]: string;
};

export const Questions = [
  "question1",
  "question2",
  "question3",
  "question4",
  "question5",
  "question6",
  "question7",
  "question8",
  "question9",
  "question10",
] as const;

export interface FormAnswer {
  clubid: number;
  phone: string;
  [key: string]: string | number;
}

export interface Apply {
  [key: string]: string | object;
  club: {
    name: string;
  };
}

export type Answer = {
  [key in typeof Answers[number] | "phone"]: string;
};

export const Answers = [
  "answer1",
  "answer2",
  "answer3",
  "answer4",
  "answer5",
  "answer6",
  "answer7",
  "answer8",
  "answer9",
  "answer10",
] as const;
