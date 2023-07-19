import axios from 'axios';

import {
  PerformanceNewParams,
  PerformanceResponse,
  PerformanceRankParams,
  PerformanceRankResponse,
  PerformanceResponseWithPages,
  PerformanceCountByGenreResponse,
  GetPerformancesParams,
  SearchPerformanceParams,
} from 'apis/performance/type';

const performanceAxios = axios.create({
  baseURL: `/api/performances`,
});

// TODO : react-query 연결
/**
 * @param params
 * @summary 공연 카테고리 조회
 */
const getPerformances = async (
  params: GetPerformancesParams,
): Promise<PerformanceResponseWithPages<PerformanceResponse>> => {
  try {
    const response = await performanceAxios.get(`/`, { params });
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('getPerformances Api 에러발생');
  }
};

/**
 * @param params
 * @summary 공연 id로 상세 조회
 */
const getPerformanceById = async (
  params: Pick<PerformanceResponse, 'id'>,
): Promise<PerformanceResponse> => {
  try {
    const response = await performanceAxios.get(`/${params.id}`);
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('getPerformanceById Api 에러발생');
  }
};

/**
 * @param params
 * @summary 공연 상세페이지 추천 공연 목록 조회
 */
const getRecommendationPerformancesById = async (
  params: Pick<PerformanceResponse, 'id'>,
): Promise<PerformanceResponse[]> => {
  try {
    const response = await performanceAxios.get(`/${params.id}/recommendation`);
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('getRecommendationPerformance Api 에러발생');
  }
};

/**
 * @param params
 * @summary 키워드로 공연 검색
 */
const searchPerformances = async (
  params: SearchPerformanceParams,
): Promise<PerformanceResponseWithPages<PerformanceResponse>> => {
  try {
    const response = await performanceAxios.get(`/search`, { params });
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('searchPerformance Api 에러발생');
  }
};

const getPerformanceByRank = async (
  params: PerformanceRankParams,
): Promise<PerformanceResponseWithPages<PerformanceRankResponse>> => {
  try {
    const response = await performanceAxios.get('/rank', { params });
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('getPerformanceByRank Api 에러발생');
  }
};

const getPerformanceByNew = async (
  params: PerformanceNewParams,
): Promise<PerformanceResponseWithPages<PerformanceResponse>> => {
  try {
    const response = await performanceAxios.get('/new', { params });
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('getNew Api 에러발생');
  }
};

const getCountByGenre = async (): Promise<PerformanceCountByGenreResponse[]> => {
  try {
    const response = await performanceAxios.get('/genres/count');
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('getNew Api 에러발생');
  }
};

const performanceService = {
  getPerformances,
  getPerformanceById,
  getRecommendationPerformancesById,
  searchPerformances,
  getPerformanceByRank,
  getPerformanceByNew,
  getCountByGenre,
};

export default performanceService;
