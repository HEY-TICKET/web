import { CommonItem } from 'types/common';
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
 * @summary 공연관련 API에서 사용하는 지역 리스트
 */
export const AREA_LIST = [
  'SEOUL',
  'BUSAN',
  'DAEGU',
  'INCHEON',
  'GWANGJU',
  'DAEJEON',
  'ULSAN',
  'SEJONG',
  'GYEONGGI',
  'GANGWON',
  'CHUNGBUK',
  'CHUNGNAM',
  'JEONBUK',
  'JEONNAM',
  'GYEONGBUK',
  'GYEONGNAM',
  'JEJU',
] as const;

export const AREA_LIST_MAP: CommonItem<AreaTypes>[] = [
  { caption: '서울특별시', value: 'SEOUL' },
  { caption: '부산광역시', value: 'BUSAN' },
  { caption: '대구광역시', value: 'DAEGU' },
  { caption: '인천광역시', value: 'INCHEON' },
  { caption: '광주광역시', value: 'GWANGJU' },
  { caption: '대전광역시', value: 'DAEJEON' },
  { caption: '울산광역시', value: 'ULSAN' },
  { caption: '세종특별자치시', value: 'SEJONG' },
  { caption: '경기도', value: 'GYEONGGI' },
  { caption: '강원도', value: 'GANGWON' },
  { caption: '충청북도', value: 'CHUNGBUK' },
  { caption: '충청남도', value: 'CHUNGNAM' },
  { caption: '전라북도', value: 'JEONBUK' },
  { caption: '전라남도', value: 'JEONNAM' },
  { caption: '경상북도', value: 'GYEONGBUK' },
  { caption: '경상남도', value: 'GYEONGNAM' },
  { caption: '제주특별자치도', value: 'JEJU' },
];

export const GENRE_LIST = [
  'ALL',
  'THEATER',
  'MUSICAL',
  'CLASSIC',
  'KOREAN_TRADITIONAL_MUSIC',
  'POPULAR_MUSIC',
  'DANCE',
  'POPULAR_DANCE',
  'CIRCUS_AND_MAGIC',
  'MIXED_GENRE',
] as const;

export const GENRE_LIST_MAP: CommonItem<GenreTypes>[] = [
  { caption: '전체', value: 'ALL' },
  { caption: '연극', value: 'THEATER' },
  { caption: '뮤지컬', value: 'MUSICAL' },
  { caption: '클래식', value: 'CLASSIC' },
  { caption: '국악', value: 'KOREAN_TRADITIONAL_MUSIC' },
  { caption: '대중음악', value: 'POPULAR_MUSIC' },
  { caption: '무용', value: 'DANCE' },
  { caption: '대중무용', value: 'POPULAR_DANCE' },
  { caption: '서커스/마술', value: 'CIRCUS_AND_MAGIC' },
  { caption: '복합장르', value: 'MIXED_GENRE' },
];

export const STATUS_LIST = ['UPCOMING', 'ONGOING', 'COMPLETED'] as const;

export const STATUS_LIST_MAP: CommonItem<StatusTypes>[] = [
  { caption: '공연 예정', value: 'UPCOMING' },
  { caption: '공연 중', value: 'ONGOING' },
  { caption: '공연 종료', value: 'COMPLETED' },
];

export const SORTING_ORDER_LIST = ['ASC', 'DESC'] as const;

export const SORTING_ORDER_LIST_MAP: CommonItem<SortingOrderTypes>[] = [
  { caption: '오름차순', value: 'ASC' },
  { caption: '내림차순', value: 'DESC' },
];

export const SORTING_METHOD_LIST = ['TIME', 'VIEWS', 'END_DATE', 'LIKE_DATE'] as const;

export const SORTING_METHOD_LIST_MAP: CommonItem<SortingMethodTypes>[] = [
  { caption: '최근 등록순', value: 'TIME' },
  { caption: '조회수 순', value: 'VIEWS' },
  { caption: '공연 종료순', value: 'END_DATE' },
  { caption: '찜 등록순', value: 'LIKE_DATE' },
];

export const SEARCH_TYPES = ['PERFORMANCE', 'ARTIST'] as const;

export const SEARCH_TYPES_MAP: CommonItem<SearchTypes>[] = [
  { caption: '공연', value: 'PERFORMANCE' },
  { caption: '아티스트', value: 'ARTIST' },
];

export const SORTING_ORDER_BY_PERIOD = ['DAY', 'WEEK', 'MONTH'] as const;

export const SORTING_ORDER_BY_PERIOD_MAP: CommonItem<SortingOrderByPeriodTypes>[] = [
  { caption: '일간', value: 'DAY' },
  { caption: '주간', value: 'WEEK' },
  { caption: '월간', value: 'MONTH' },
];

export const BOX_OFFICE_GENRE_LIST = [
  'ALL',
  'THEATER',
  'MUSICAL',
  'CLASSIC',
  'KOREAN_TRADITIONAL_MUSIC',
  'POPULAR_MUSIC',
  'DANCE',
  'POPULAR_DANCE',
  'CIRCUS_AND_MAGIC',
  'MIXED_GENRE',
  'KID',
  'OPEN',
] as const;

export const BOX_OFFICE_GENRE_LIST_MAP: CommonItem<BoxOfficeGenreTypes>[] = [
  { caption: '전체', value: 'ALL' },
  { caption: '연극', value: 'THEATER' },
  { caption: '뮤지컬', value: 'MUSICAL' },
  { caption: '클래식', value: 'CLASSIC' },
  { caption: '국악', value: 'KOREAN_TRADITIONAL_MUSIC' },
  { caption: '대중음악', value: 'POPULAR_MUSIC' },
  { caption: '무용', value: 'DANCE' },
  { caption: '대중무용', value: 'POPULAR_DANCE' },
  { caption: '서커스/마술', value: 'CIRCUS_AND_MAGIC' },
  { caption: '복합장르', value: 'MIXED_GENRE' },
  { caption: '아동', value: 'KID' },
  { caption: '진행중', value: 'OPEN' },
];

export const BOX_OFFICE_AREA_LIST = [
  'ALL',
  'SEOUL',
  'BUSAN',
  'DAEGU',
  'INCHEON',
  'GWANGJU',
  'DAEJEON',
  'ULSAN',
  'SEJONG',
  'GYEONGGI',
  'GANGWON',
  'CHUNGCHEONG',
  'JEOLLA',
  'GYEONGSANG',
  'JEJU',
  'UNI',
];

export const BOX_OFFICE_AREA_LIST_MAP: CommonItem<BoxOfficeAreaTypes>[] = [
  { caption: '전체', value: 'ALL' },
  { caption: '서울특별시', value: 'SEOUL' },
  { caption: '부산광역시', value: 'BUSAN' },
  { caption: '대구광역시', value: 'DAEGU' },
  { caption: '인천광역시', value: 'INCHEON' },
  { caption: '광주광역시', value: 'GWANGJU' },
  { caption: '대전광역시', value: 'DAEJEON' },
  { caption: '울산광역시', value: 'ULSAN' },
  { caption: '세종특별자치시', value: 'SEJONG' },
  { caption: '경기도', value: 'GYEONGGI' },
  { caption: '강원도', value: 'GANGWON' },
  { caption: '충청도', value: 'CHUNGCHEONG' },
  { caption: '전라도', value: 'JEOLLA' },
  { caption: '경상도', value: 'GYEONGSANG' },
  { caption: '제주특별자치도', value: 'JEJU' },
  { caption: '대학교', value: 'UNI' },
];
