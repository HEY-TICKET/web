import axios from 'axios';

import {
  PerformanceNewParams,
  PerformanceNewResponse,
  PerformanceParams,
  PerformanceRankParams,
  PerformanceRankResponse,
  PerformanceResponse,
  PerformanceResponseWithPages,
} from 'apis/New/performance/type';

const performanceAxios = axios.create({
  baseURL: `/api/performances`,
});

const getPerformance = async (params: PerformanceParams): Promise<PerformanceResponse> => {
  try {
    const response = await performanceAxios.get(`/${params.id}`);
    return response.data.data;
  } catch (err) {
    throw new Error('getPerformance Api 에러발생');
  }
};

const getRecommendationPerformance = async (
  params: PerformanceParams,
): Promise<PerformanceResponse> => {
  try {
    const response = await performanceAxios.get(`/${params.id}/recommendation`);
    return response.data.data;
  } catch (err) {
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
    throw new Error('getRank Api 에러발생');
  }
};

const getNew = async (
  params: PerformanceNewParams,
): Promise<PerformanceResponseWithPages<PerformanceNewResponse>> => {
  try {
    const response = await performanceAxios.get('/new', { params });
    return response.data.data;
  } catch (err) {
    throw new Error('getNew Api 에러발생');
  }
};

const performanceService = { getPerformance, getRecommendationPerformance, getRank, getNew };

export default performanceService;
