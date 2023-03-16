'use client';

import { AxiosError } from 'axios';
import { useInfiniteQuery, UseInfiniteQueryOptions, UseInfiniteQueryResult } from 'react-query';

import performanceService from 'apis/performance';
import { SIZE_PER_PAGE } from 'apis/performance/constants';
import { PerformancesParams, PerformancesResponses } from 'apis/performance/type';

const performanceKeys = {
  all: ['performance'],
  lists: () => [...performanceKeys.all, 'list'],
  list: (params: PerformancesParams) => [...performanceKeys.lists(), params],
} as const;

export const useInfinitePerformanceQuery = (
  params: PerformancesParams,
  config?: Omit<
    UseInfiniteQueryOptions<
      PerformancesResponses[],
      AxiosError,
      PerformancesResponses[],
      PerformancesResponses[],
      ReturnType<typeof performanceKeys.list>
    >,
    'getNextPageParam'
  >,
): UseInfiniteQueryResult<PerformancesResponses[], AxiosError> => {
  return useInfiniteQuery(
    performanceKeys.list(params),
    async ({ queryKey: [, , params], pageParam = 0 }) => {
      const _params = params as PerformancesParams;
      return performanceService.getPerformances({
        ..._params,
        page: pageParam,
        size: SIZE_PER_PAGE,
      });
    },
    {
      ...config,
      getNextPageParam: (lastPage, allPages) => {
        return !lastPage.length ? undefined : allPages.length;
      },
    },
  );
};
