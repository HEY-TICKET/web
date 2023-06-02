export const TIME_PERIOD = {
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
} as const;

export const GENRE = {
  THEATER: 'THEATER',
  MUSICAL: 'MUSICAL',
  CLASSIC: 'CLASSIC',
  KOREAN_TRADITIONAL_MUSIC: 'KOREAN_TRADITIONAL_MUSIC',
  POPULAR_MUSIC: 'POPULAR_MUSIC',
  DANCE: 'DANCE',
  POPULAR_DANCE: 'POPULAR_DANCE',
  CIRCUS_AND_MAGIC: 'CIRCUS_AND_MAGIC',
  MIXED_GENRE: 'MIXED_GENRE',
  KID: 'KID',
  OPEN: 'OPEN',
  ALL: 'ALL',
} as const;

export const AREA = {
  SEOUL: 'SEOUL',
  INCHEON: 'INCHEON',
  DAEJEON: 'DAEJEON',
  DAEGU: 'DAEGU',
  GWANGJU: 'GWANGJU',
  BUSAN: 'BUSAN',
  ULSAN: 'ULSAN',
  SEJONG: 'SEJONG',
  GYEONGGI: 'GYEONGGI',
  CHUNGCHEONG: 'CHUNGCHEONG',
  GYEONGSANG: 'GYEONGSANG',
  JEOLLA: 'JEOLLA',
  GANGWON: 'GANGWON',
  JEJU: 'JEJU',
  UNI: 'UNI',
  ALL: 'ALL',
} as const;

export const SORT_TYPE = {
  TIME: 'TIME',
  VIEWS: 'VIEWS',
} as const;

export const SORT_ORDER = {
  DESC: 'DESC',
  ASC: 'ASC',
} as const;

// caption, value 별 정리

export const PERFORMANCE_GENRE_MAP = [
  { caption: '전체', value: 'ALL' },
  { caption: '연극', value: 'THEATER' },
  { caption: '뮤지컬', value: 'MUSICAL' },
  { caption: '클래식', value: 'CLASSIC' },
  { caption: '국악', value: 'KOREAN_TRADITIONAL_MUSIC' },
  { caption: '대중음악', value: 'POPULAR_MUSIC' },
  { caption: '무용', value: 'DANCE' },
  { caption: '현대무용', value: 'POPULAR_DANCE' },
  { caption: '서커스/마술', value: 'CIRCUS_AND_MAGIC' },
  { caption: '복합', value: 'MIXED_GENRE' },
  { caption: '아동', value: 'KID' },
  { caption: '진행중', value: 'OPEN' },
] as const;
