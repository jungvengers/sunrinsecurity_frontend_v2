export interface ClubData {
  [key: string]: {
    name: string;
    description: string;
    curriculum: string;
    image: string;
    site: string;
    facebook: string;
  };
}

export interface ClubList {
  id: number;
  name: string;
}
