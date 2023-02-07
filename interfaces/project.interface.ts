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
  image: File;
  description: string;
  participant: string;
}
