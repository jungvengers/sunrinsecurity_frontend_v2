export interface ProjectList {
  id: string;
  club: string;
  name: string;
  type: string;
  image: string;
  description: string;
  participants: string;
}

export interface CreateProject {
  club: string;
  name: string;
  type: string;
  description: string;
  participants: string;
  detail: string;
}

export interface ProjectDetail {
  id: string;
  club: string;
  name: string;
  type: string;
  description: string;
  participants: string;
  detail: string;
  attach: string[];
  createdAt: string;
}
