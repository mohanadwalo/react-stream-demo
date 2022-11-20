type ApiResponse<T> = {
  status: 'SUCCESS' | 'FAIL';
  errorMessage: string;
  data?: T;
};

export type { ApiResponse };
