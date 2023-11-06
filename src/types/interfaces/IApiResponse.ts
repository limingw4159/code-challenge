export interface IApiResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}
