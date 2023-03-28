import { HttpClient } from 'core/HttpClient';

import {
  DetailPerformanceParams,
  PerformancesParams,
  PerformancesResponses,
} from '../performance/type';

class PerformanceApi extends HttpClient {
  constructor() {
    // env로 관리 필요.
    super({ baseUrl: 'http://13.209.246.231:8080/api/v1' });
  }
  getPerformances = async (params: PerformancesParams): Promise<PerformancesResponses[]> => {
    return await this.instance.get('/performances', { params });
  };

  getPerformanceDetail = async (
    params: DetailPerformanceParams,
  ): Promise<PerformancesResponses> => {
    return await this.instance.get(`/performances/${params.id}`);
  };

  // getPlace = async () => {};
}

const performanceService = new PerformanceApi();

export default performanceService;
