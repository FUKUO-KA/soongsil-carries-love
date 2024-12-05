export interface LoginResponse {
  department: string;
  email: string;
  gender: string;
  highSchoolCode: string;
  highSchoolName: string;
  nickname: string;
}

export interface SchoolData {
  schoolName: string;
  userCount: number;
}

export interface HighSchoolRankingResponse {
  schoolData: SchoolData[];
}
