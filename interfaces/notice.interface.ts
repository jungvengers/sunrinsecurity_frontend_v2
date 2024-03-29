export interface NoticeList {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export interface NoticeDetail {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNotice {
  title: string;
  author: string;
  content: string;
}

export interface EditNotice {
  title: string;
  content: string;
}
