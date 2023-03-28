export type PerformancesParams = {
  page: number;
  size: number;
};

export type DetailPerformanceParams = {
  id: string;
};

export type Url = {
  url: string;
};

export type PerformancesResponses = {
  mt20id: string; // 공연 id
  mt10id: string; // 공연 시설 id
  title: string; // 공연명
  startDate: Date | string; // 공연 시작일
  endDate: Date | string; // 공연 종료일
  place: string; // 공연 시설명
  cast: string; // 출연진
  crew: string; // 제작진
  runtime: string; // 공연 시간
  age: string; // 관람 연령
  entrpsnm: string; // 제작사
  pcseguidance: string; // 티켓 가격
  poster: string; // 포스터 이미지 경로
  sty: string; // 줄거리
  genre: string; // 장르
  state: string; // 공연 상태
  openrun: boolean; // 오픈런 여부
  // 줄거리 이미지 경로
  styurls: Url[];

  dtguidance: string; // 공연시간
};
