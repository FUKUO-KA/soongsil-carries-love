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

export interface UserCountResponse {
    highschoolCode: string;
    userCount: number;
}

export interface GenderRatioResponse {
    unassignedRatio: number;
    femaleRatio: number;
    maleRatio: number;
}

export interface StudentCountResponse {
    studentIdDistribution: {
        [studentId: string]: number;
    };
}
export interface HighSchoolRankingResponse {
    schoolData: SchoolData[];
}
