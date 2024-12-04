export interface SchoolData {
    schoolName: string;
    userCount: number;
}

export interface HighSchoolRankingResponse {
    schoolData: SchoolData[];
}