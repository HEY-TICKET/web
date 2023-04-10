'use client';

import { AxiosError } from 'axios';
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

import performanceService from 'apis/performance';
import { SIZE_PER_PAGE } from 'apis/performance/constants';
import {
  DetailPerformanceParams,
  PerformancesParams,
  PerformancesResponses,
} from 'apis/performance/type';

const PERFORMANCES_KEYS = {
  all: ['performance'],
  lists: () => [...PERFORMANCES_KEYS.all, 'list'],
  list: (params: PerformancesParams) => [...PERFORMANCES_KEYS.lists(), params],
  details: () => [...PERFORMANCES_KEYS.all, 'detail'],
  detail: (params: DetailPerformanceParams) => [...PERFORMANCES_KEYS.details(), params],
} as const;

export const useDetailPerformanceQuery = (
  params: DetailPerformanceParams,
  config?: Omit<
    UseQueryOptions<
      PerformancesResponses,
      AxiosError,
      PerformancesResponses,
      ReturnType<typeof PERFORMANCES_KEYS.detail>
    >,
    'queryKey' | 'queryFn'
  >,
): UseQueryResult<PerformancesResponses, AxiosError> => {
  return useQuery(
    PERFORMANCES_KEYS.detail(params),
    () => performanceService.getPerformanceDetail(params),
    { ...config },
  );
};

export const usePerformanceQuery = (
  params: PerformancesParams,
  config?: UseQueryOptions<
    PerformancesResponses[],
    AxiosError,
    PerformancesResponses[],
    ReturnType<typeof PERFORMANCES_KEYS.list>
  >,
): UseQueryResult<PerformancesResponses[], AxiosError> => {
  return useQuery(
    PERFORMANCES_KEYS.list(params),
    () => performanceService.getPerformances(params),
    {
      ...config,
    },
  );
};

export const useInfinitePerformanceQuery = (
  params: PerformancesParams,
  config?: Omit<
    UseInfiniteQueryOptions<
      PerformancesResponses[],
      AxiosError,
      PerformancesResponses[],
      PerformancesResponses[],
      ReturnType<typeof PERFORMANCES_KEYS.list>
    >,
    'getNextPageParam'
  >,
): UseInfiniteQueryResult<PerformancesResponses[], AxiosError> => {
  return useInfiniteQuery(
    PERFORMANCES_KEYS.list(params),
    ({ queryKey: [, , params], pageParam = 0 }) => {
      const _params = params as PerformancesParams;
      return performanceService.getPerformances({
        ..._params,
        page: pageParam + 1,
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
