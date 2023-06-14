export interface HttpResponse<T> {
  success: boolean;
  data: T;
  message: string;
  meta?: Meta;
}

export interface Meta {
  total: number;
  pages: number;
  current: number;
  size: number;
}

export type Season = {
  name: string;
};
