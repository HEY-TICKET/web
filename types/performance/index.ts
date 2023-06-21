import {
  AREA_LIST,
  BOX_OFFICE_AREA_LIST,
  BOX_OFFICE_GENRE_LIST,
  GENRE_LIST,
  SEARCH_TYPES,
  SORTING_METHOD_LIST,
  SORTING_ORDER_BY_PERIOD,
  SORTING_ORDER_LIST,
  STATUS_LIST,
} from 'constants/performance/common';

export type AreaTypes = (typeof AREA_LIST)[number];

export type GenreTypes = (typeof GENRE_LIST)[number];

export type StatusTypes = (typeof STATUS_LIST)[number];

export type SortingOrderTypes = (typeof SORTING_ORDER_LIST)[number];

export type SortingMethodTypes = (typeof SORTING_METHOD_LIST)[number];

export type SearchTypes = (typeof SEARCH_TYPES)[number];

export type SortingOrderByPeriodTypes = (typeof SORTING_ORDER_BY_PERIOD)[number];

export type BoxOfficeGenreTypes = (typeof BOX_OFFICE_GENRE_LIST)[number];

export type BoxOfficeAreaTypes = (typeof BOX_OFFICE_AREA_LIST)[number];
