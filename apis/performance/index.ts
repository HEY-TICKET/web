import axios from 'axios';

import {
  PerformanceNewParams,
  PerformanceResponse,
  PerformanceParams,
  PerformanceRankParams,
  PerformanceRankResponse,
  PerformanceCommonResponse,
  PerformanceResponseWithPages,
  PerformanceCountByGenreResponse,
  GetPerformancesParams,
  SearchPerformanceParams,
} from 'apis/performance/type';

const performanceAxios = axios.create({
  baseURL: `/api/performances`,
});

// TODO : react-query 연결
const getPerformances = async (
  params: GetPerformancesParams,
): Promise<PerformanceResponseWithPages<PerformanceResponse>> => {
  try {
    const response = await performanceAxios.get(`/`, { params });
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('getPerformance Api 에러발생');
  }
};

// TODO : react-query 연결
const searchPerformance = async (
  params: SearchPerformanceParams,
): Promise<PerformanceResponseWithPages<PerformanceResponse>> => {
  try {
    const response = await performanceAxios.get(`/search`, { params });
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('getPerformance Api 에러발생');
  }
};

const getPerformanceById = async (params: PerformanceParams): Promise<PerformanceResponse> => {
  try {
    const response = await performanceAxios.get(`/${params.id}`);
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('getPerformance Api 에러발생');
  }
};

const getRecommendationPerformance = async (
  params: PerformanceParams,
): Promise<PerformanceCommonResponse[]> => {
  try {
    const response = await performanceAxios.get(`/${params.id}/recommendation`);
    console.log('response', response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('getRecommendationPerformance Api 에러발생');
  }
};

const getRank = async (
  params: PerformanceRankParams,
): Promise<PerformanceResponseWithPages<PerformanceRankResponse>> => {
  try {
    const response = await performanceAxios.get('/rank', { params });
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw new Error('getRank Api 에러발생');
  }
};

const getNew = async (
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
  searchPerformance,
  getPerformanceById,
  getRecommendationPerformance,
  getRank,
  getNew,
  getCountByGenre,
};

export default performanceService;
