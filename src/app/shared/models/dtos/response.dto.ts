export interface ResponseDto<T = any> {
  message: string;
  data: T;
  statusCode: number;
}
