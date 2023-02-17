export interface ProjectList {
  id: string;
  club: string;
  name: string;
  type: string;
  image: string;
  description: string;
  participant: string;
}

export interface CreateProject {
  club: string;
  name: string;
  type: string;
  description: string;
  participant: string;
  content: string;
}

export interface ProjectDetail {
  id: string;
  club: string;
  name: string;
  type: string;
  description: string;
  participant: string;
  content: string;
  createdAt: string;
}
