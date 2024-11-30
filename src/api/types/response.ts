export interface LoginResponse {
    /* 로그인 성공 시 반환되는 데이터 */
}

export interface UserCountResponse {
    highschoolCode: string;
    userCount: number;
}

export interface GenderRatioResponse {
    highschoolCode: string;
    maleCount: number;
    femaleCount: number;
    unassignedCount: number;
}

