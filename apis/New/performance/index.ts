import {
  PerformanceRankParams,
  PerformanceResponseWithPages,
  PerformanceRankResponse,
  PerformanceResponse,
  PerformanceNewParams,
  PerformanceParams,
  PerformanceNewResponse,
} from 'apis/New/performance/type';
import { HttpClient } from 'core/HttpClient';

class PerformanceApi extends HttpClient {
  constructor() {
    super({ baseUrl: `/api/performances` });
  }

  getPerformance = async (params: PerformanceParams): Promise<PerformanceResponse> => {
    return await this.instance.get(`/${params.id}`);
  };

  getRecommendationPerformance = async (
    params: PerformanceParams,
  ): Promise<PerformanceResponse> => {
    return await this.instance.get(`/${params.id}/recommendation`);
  };

  getRank = async (
    params: PerformanceRankParams,
  ): Promise<PerformanceResponseWithPages<PerformanceRankResponse>> => {
    return await this.instance.get('/rank', { params }).then((res) => res.data);
  };

  getNew = async (
    params: PerformanceNewParams,
  ): Promise<PerformanceResponseWithPages<PerformanceNewResponse>> => {
    return await this.instance.get('/new', { params }).then((res) => res.data);
  };
}

const performanceService = new PerformanceApi();

export default performanceService;
