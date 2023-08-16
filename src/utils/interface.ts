export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  meta_data?: Record<string, any> | null;
  time_stamp?: number;
  total_count: number | null;
  pageIndex?: number;
  pageSize?: number;
  totalItems?: number;
  totalPages?: number;
}

export interface IUserProfile {
  name: string;
  avatar: string;
}

export interface ISignInForm {
  email: string;
  password: string;
}
