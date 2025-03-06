export interface DepartmentData {
    [key: string]: {
      name: string; // 정보과
      description: string; //설명
      image: string; //학과 아이콘
      site: string; //선린 사이트
    };
  }
  
  export type DepartmentList = Department[];
  
  export interface Department {
    id: number;
    name: string;
    description: string;
    image: string;
    links: { image: string; name: string; link: string }[];
  }
  