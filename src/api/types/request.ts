export interface JoinRequest {
  email: string;
  password: string;
  college?: string;
  department?: string;
  nickname: string;
  studentId: string;
  gender: string;
  schoolCode: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
