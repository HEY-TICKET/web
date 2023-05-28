import axios from 'axios';

import {
  PerformanceNewParams,
  PerformanceResponse,
  PerformanceParams,
  PerformanceRankParams,
  PerformanceRankResponse,
  PerformanceCommonResponse,
  PerformanceResponseWithPages,
} from 'apis/performance/type';

const performanceAxios = axios.create({
  baseURL: `/api/performances`,
});

const getPerformance = async (params: PerformanceParams): Promise<PerformanceResponse> => {
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
): Promise<PerformanceCommonResponse> => {
  try {
    const response = await performanceAxios.get(`/${params.id}/recommendation`);
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

const performanceService = { getPerformance, getRecommendationPerformance, getRank, getNew };

export default performanceService;
