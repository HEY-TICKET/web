import { AREA, GENRE, SORT_ORDER, SORT_TYPE, TIME_PERIOD } from 'constants/new/performance';

export type PerformanceParams = {
  id: string;
};

export type PerformanceRankParams = {
  page: number;
  pageSize: number;

  timePeriod: keyof typeof TIME_PERIOD;
  date: Date | string;
  genre?: keyof typeof GENRE;
  area?: keyof typeof AREA;
};

export type PerformanceNewParams = {
  page: number;
  pageSize: number;

  genre: keyof typeof GENRE;
  sortType: keyof typeof SORT_TYPE;
  sortOrder: keyof typeof SORT_ORDER;
};

export type PerformanceResponseWithPages<T> = {
  contents: T[];
  page: number;
  pageSize: number;
  totalPages: number;
};

export type PerformanceCommonResponse = {
  id: string;
  address: string;
  placeId: string;
  title: string;
  startDate: Date;
  endDate: Date;
  theater: string;
  cast: string;
  crew: string;
  runtime: string;
  age: string;
  company: string;
  price: string;
  poster: string;
  story: string;
  genre: string;
  state: string;
  openRun: boolean;
  storyUrls: string[];
  schedule: string; // 공연시간
  phoneNumber: string;
};

export interface PerformanceResponse extends PerformanceCommonResponse {
  views: number;
  latitude: number;
  longitude: number;
}

export interface PerformanceRankResponse extends PerformanceCommonResponse {
  rank: number;
}

export interface PerformanceCountByGenreResponse {
  genre: keyof typeof GENRE;
  count: number;
}
