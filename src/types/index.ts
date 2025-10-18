export interface ProfileResponse {
  status: string;
  user: {
    email: string;
    name: string;
    stack: string;
  };
  timestamp: string;
  fact: string;
}

export interface CatFactResponse {
  fact: string;
  length: number;
}

export interface ErrorResponse {
  status: string;
  message: string;
}