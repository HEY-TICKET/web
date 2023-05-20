import {
  PerformanceRankParams,
  PerformanceResponseWithPages,
  PerformanceRankResponse,
  PerformanceResponse,
  PerformanceNewParams,
  PerformanceParams,
} from 'apis/New/performance/type';
import { HttpClient } from 'core/HttpClient';

class PerformanceApi extends HttpClient {
  constructor() {
    // env로 관리 필요.
    super({ baseUrl: process.env.NEXT_PUBLIC_API_URL });
  }

  getPerformance = async (params: PerformanceParams): Promise<PerformanceResponse> => {
    return await this.instance.get(`/performances/${params.id}`);
  };

  getRecommendationPerformance = async (
    params: PerformanceParams,
  ): Promise<PerformanceResponse> => {
    return await this.instance.get(`/performances/${params.id}/recommendation`);
  };

  getRank = async (
    params: PerformanceRankParams,
  ): Promise<PerformanceResponseWithPages<PerformanceRankResponse>> => {
    return await this.instance.get('/performances/rank', { params });
  };

  getNew = async (
    params: PerformanceNewParams,
  ): Promise<PerformanceResponseWithPages<PerformanceResponse>> => {
    return await this.instance.get('/performances/new', { params });
  };
}

const performanceService = new PerformanceApi();

export default performanceService;
