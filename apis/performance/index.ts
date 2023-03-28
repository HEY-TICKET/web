import { HttpClient } from 'core/HttpClient';

import {
  DetailPerformanceParams,
  PerformancesParams,
  PerformancesResponses,
} from '../performance/type';

class PerformanceApi extends HttpClient {
  constructor() {
    super({ baseUrl: '/' });
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
