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

export type ClubList = Club[];

export interface Club {
  id: number;
  name: string;
  description: string;
  curriculum: string;
  image: string;
  links: { image: string; name: string; link: string }[];
}
