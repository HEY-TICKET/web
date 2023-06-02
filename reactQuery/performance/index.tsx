'use client';

import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import performanceService from 'apis/performance';
import {
  PerformanceNewParams,
  PerformanceResponse,
  PerformanceParams,
  PerformanceRankParams,
  PerformanceRankResponse,
  PerformanceResponseWithPages,
  PerformanceCommonResponse,
} from 'apis/performance/type';

const PERFORMANCES_KEYS = {
  all: ['performance'],
  // lists: () => [...PERFORMANCES_KEYS.all, 'list'],
  // list: (params: PerformancesParams) => [...PERFORMANCES_KEYS.lists(), params],

  details: () => [...PERFORMANCES_KEYS.all, 'detail'],
  detail: (params: PerformanceParams) => [...PERFORMANCES_KEYS.details(), params],

  ranks: () => [...PERFORMANCES_KEYS.all, 'rank'],
  rank: (params: PerformanceRankParams) => [...PERFORMANCES_KEYS.ranks(), params],

  news: () => [...PERFORMANCES_KEYS.all, 'new'],
  new: (params: PerformanceNewParams) => [...PERFORMANCES_KEYS.news(), params],

  recommendations: () => [...PERFORMANCES_KEYS.all, 'recommendation'],
  recommendation: (params: PerformanceParams) => [...PERFORMANCES_KEYS.news(), params],
} as const;

export const usePerformanceRankQuery = (
  params: PerformanceRankParams,
  config?: Omit<
    UseQueryOptions<
      PerformanceResponseWithPages<PerformanceRankResponse>,
      AxiosError,
      PerformanceResponseWithPages<PerformanceRankResponse>,
      ReturnType<typeof PERFORMANCES_KEYS.rank>
    >,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery(PERFORMANCES_KEYS.rank(params), () => performanceService.getRank(params), {
    ...config,
  });
};

export const usePerformanceNewQuery = (
  params: PerformanceNewParams,
  config?: Omit<
    UseQueryOptions<
      PerformanceResponseWithPages<PerformanceResponse>,
      AxiosError,
      PerformanceResponseWithPages<PerformanceResponse>,
      ReturnType<typeof PERFORMANCES_KEYS.new>
    >,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery(PERFORMANCES_KEYS.new(params), () => performanceService.getNew(params), {
    ...config,
  });
};

export const usePerformanceDetailQuery = (
  params: PerformanceParams,
  config?: Omit<
    UseQueryOptions<
      PerformanceResponse,
      AxiosError,
      PerformanceResponse,
      ReturnType<typeof PERFORMANCES_KEYS.detail>
    >,
    'queryKey' | 'queryFn'
  >,
): UseQueryResult<PerformanceResponse, AxiosError> => {
  return useQuery(
    PERFORMANCES_KEYS.detail(params),
    () => performanceService.getPerformance(params),
    { ...config },
  );
};

export const useRecommendationPerformanceQuery = (
  params: PerformanceParams,
  config?: UseQueryOptions<
    PerformanceCommonResponse[],
    AxiosError,
    PerformanceCommonResponse[],
    ReturnType<typeof PERFORMANCES_KEYS.recommendation>
  >,
): UseQueryResult<PerformanceCommonResponse[], AxiosError> => {
  return useQuery(
    PERFORMANCES_KEYS.recommendation(params),
    () => performanceService.getRecommendationPerformance(params),
    {
      ...config,
    },
  );
};

// export const useInfinitePerformanceQuery = (
//   params: PerformancesParams,
//   config?: Omit<
//     UseInfiniteQueryOptions<
//       PerformancesResponses[],
//       AxiosError,
//       PerformancesResponses[],
//       PerformancesResponses[],
//       ReturnType<typeof PERFORMANCES_KEYS.list>
//     >,
//     'getNextPageParam'
//   >,
// ): UseInfiniteQueryResult<PerformancesResponses[], AxiosError> => {
//   return useInfiniteQuery(
//     PERFORMANCES_KEYS.list(params),
//     ({ queryKey: [, , params], pageParam = 0 }) => {
//       const _params = params as PerformancesParams;
//       return performanceService.getPerformances({
//         ..._params,
//         page: pageParam,
//       });
//     },
//     {
//       ...config,
//       getNextPageParam: (lastPage, allPages) => {
//         return !lastPage.length ? undefined : allPages.length;
//       },
//     },
//   );
// };
