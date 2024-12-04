export interface LoginResponse {
    /* 로그인 성공 시 반환되는 데이터 */
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
