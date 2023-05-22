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

export type PerformanceResponse = {
  id: string;
  placeId: string;
  title: string;
  startDate: Date;
  endDate: Date;
  place: string;
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
  dtguidance: string; // 공연시간
  views: number;
  latitude: number;
  longitude: number;
};

export type PerformanceRankResponse = {
  id: string;
  placeId: string;
  title: string;
  startDate: Date;
  endDate: Date;
  place: string;
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
  dtguidance: string; // 공연시간
  rank: number;
};
