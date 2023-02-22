export interface QuestionList {
  clubid: number;
  questions: string[];
}

export interface FormAnswer {
  clubid: number;
  [key: string]: string | number;
}
