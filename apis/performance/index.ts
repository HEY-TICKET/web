import { HttpClient } from 'core/HttpClient';

import { PerformancesParams, PerformancesResponses } from '../performance/type';

class PerformanceApi extends HttpClient {
  constructor() {
    super({ baseUrl: '/' });
  }
  getPerformances = async (params: PerformancesParams): Promise<PerformancesResponses[]> => {
    return await this.instance.get('/performances', { params });
  };

  // getPerformanceDetail = async () => {};

  // getPlace = async () => {};
}

const performanceService = new PerformanceApi();

export default performanceService;
