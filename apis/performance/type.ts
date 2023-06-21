import {
  AreaTypes,
  BoxOfficeAreaTypes,
  BoxOfficeGenreTypes,
  GenreTypes,
  SearchTypes,
  SortingMethodTypes,
  SortingOrderByPeriodTypes,
  SortingOrderTypes,
  StatusTypes,
} from 'types/performance';

/**
 * 페이지 조회 시 페이지 관련 공통 파라미터 타입
 */
type PerformancePageParams = {
  page: number;
  pageSize: number;
};

/**
 * 페이지로 조회 시 response 제네릭 타입
 */
export type PerformanceResponseWithPages<T> = {
  contents: T[];
  page: number;
  pageSize: number;
  totalPages: number;
};

/**
 * 공연 조회 파라미터 타입
 */
export interface GetPerformancesParams extends PerformancePageParams {
  genres: GenreTypes[];
  areas: AreaTypes[];
  date: Date | string | number;
  statuses: StatusTypes[];
  minPrice: number | null;
  maxPrice: number | null;
  sortType: SortingMethodTypes;
  sortOrder: SortingOrderTypes;
}

/**
 * 공통 공연조회 response 타입
 */
export type PerformanceResponse = {
  id: string;
  placeId: string;
  title: string;
  startDate: string;
  endDate: string;
  theater: string;
  cast: string;
  crew: string;
  runtime: string;
  age: string;
  company: string;
  price: string;
  poster: string;
  story: string;
  genre: GenreTypes;
  status: StatusTypes;
  openRun: boolean;
  storyUrls: string[];
  schedule: string;
  views: number;
  latitude: number;
  longitude: number;
  address: string;
  phoneNumber: string;
  sido: string;
  gugun: string;
};

/**
 * 공연 검색 파라미터 타입
 */
export interface SearchPerformanceParams extends PerformancePageParams {
  searchType: SearchTypes;
  query: string;
}

export interface PerformanceRankParams extends PerformancePageParams {
  boxOfficeArea?: BoxOfficeAreaTypes;
  boxOfficeGenre?: BoxOfficeGenreTypes;
  timePeriod: SortingOrderByPeriodTypes;
}

export interface PerformanceRankResponse extends PerformanceResponse {
  rank: number;
}

export interface PerformanceNewParams extends PerformancePageParams {
  genre: GenreTypes;
  sortType: SortingMethodTypes;
  sortOrder: SortingOrderTypes;
}

export interface PerformanceCountByGenreResponse {
  genre: GenreTypes;
  count: number;
}
