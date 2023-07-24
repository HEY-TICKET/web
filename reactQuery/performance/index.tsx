'use client';

import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

import performanceService from 'apis/performance';
import {
  GetPerformancesParams,
  PerformanceCountByGenreResponse,
  PerformanceNewParams,
  PerformanceRankParams,
  PerformanceRankResponse,
  PerformanceResponse,
  PerformanceResponseWithPages,
  SearchPerformanceParams,
} from 'apis/performance/type';

const PERFORMANCES_KEYS = {
  all: ['performance'],
  lists: () => [...PERFORMANCES_KEYS.all, 'list'],
  list: (params: GetPerformancesParams) => [...PERFORMANCES_KEYS.lists(), params],

  details: () => [...PERFORMANCES_KEYS.all, 'detail'],
  detail: (params: Pick<PerformanceResponse, 'id'>) => [...PERFORMANCES_KEYS.details(), params],

  ranks: () => [...PERFORMANCES_KEYS.all, 'rank'],
  rank: (params: PerformanceRankParams) => [...PERFORMANCES_KEYS.ranks(), params],

  news: () => [...PERFORMANCES_KEYS.all, 'new'],
  new: (params: PerformanceNewParams) => [...PERFORMANCES_KEYS.news(), params],

  recommendations: () => [...PERFORMANCES_KEYS.all, 'recommendation'],
  recommendation: (params: Pick<PerformanceResponse, 'id'>) => [
    ...PERFORMANCES_KEYS.recommendations(),
    params,
  ],

  counts: () => [...PERFORMANCES_KEYS.all, 'count'],
  count: () => [...PERFORMANCES_KEYS.counts()],

  searches: () => [...PERFORMANCES_KEYS.all, 'search'],
  search: (params: SearchPerformanceParams) => [...PERFORMANCES_KEYS.searches(), params],
} as const;

export const useRankPerformanceQuery = (
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
  return useQuery(
    PERFORMANCES_KEYS.rank(params),
    () => performanceService.getPerformanceByRank(params),
    {
      ...config,
    },
  );
};

export const useNewPerformanceQuery = (
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
  return useQuery(
    PERFORMANCES_KEYS.new(params),
    () => performanceService.getPerformanceByNew(params),
    {
      ...config,
    },
  );
};

export const usePerformanceByIdQuery = (
  params: Pick<PerformanceResponse, 'id'>,
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
    () => performanceService.getPerformanceById(params),
    { ...config },
  );
};

export const useRecommendationPerformanceQuery = (
  params: Pick<PerformanceResponse, 'id'>,
  config?: UseQueryOptions<
    PerformanceResponse[],
    AxiosError,
    PerformanceResponse[],
    ReturnType<typeof PERFORMANCES_KEYS.recommendation>
  >,
): UseQueryResult<PerformanceResponse[], AxiosError> => {
  return useQuery(
    PERFORMANCES_KEYS.recommendation(params),
    () => performanceService.getRecommendationPerformancesById(params),
    {
      ...config,
    },
  );
};
export const useGetCountByGenreQuery = (
  config?: UseQueryOptions<
    PerformanceCountByGenreResponse[],
    AxiosError,
    PerformanceCountByGenreResponse[],
    ReturnType<typeof PERFORMANCES_KEYS.count>
  >,
): UseQueryResult<PerformanceCountByGenreResponse[], AxiosError> => {
  return useQuery(PERFORMANCES_KEYS.count(), () => performanceService.getCountByGenre(), {
    ...config,
  });
};

export const useInfiniteNewPerformanceQuery = (
  params: PerformanceNewParams,
  config?: Omit<
    UseInfiniteQueryOptions<
      PerformanceResponseWithPages<PerformanceResponse>,
      AxiosError,
      PerformanceResponseWithPages<PerformanceResponse>,
      PerformanceResponseWithPages<PerformanceResponse>,
      ReturnType<typeof PERFORMANCES_KEYS.new>
    >,
    'getNextPageParam'
  >,
): UseInfiniteQueryResult<PerformanceResponseWithPages<PerformanceResponse>, AxiosError> => {
  return useInfiniteQuery(
    PERFORMANCES_KEYS.new(params),
    ({ queryKey: [, , params], pageParam = 1 }) => {
      const _params = params as PerformanceNewParams;
      return performanceService.getPerformanceByNew({
        ..._params,
        page: pageParam,
      });
    },
    {
      ...config,
      getNextPageParam: (lastPage, allPages) => {
        console.log({ lastPage, allPages });
        const isLastPage = lastPage.totalPages === lastPage.page || lastPage.totalPages === 0;
        return isLastPage ? undefined : lastPage.page + 1;
      },
    },
  );
};

export const useInfiniteRankPerformanceQuery = (
  params: PerformanceRankParams,
  config?: Omit<
    UseInfiniteQueryOptions<
      PerformanceResponseWithPages<PerformanceRankResponse>,
      AxiosError,
      PerformanceResponseWithPages<PerformanceRankResponse>,
      PerformanceResponseWithPages<PerformanceRankResponse>,
      ReturnType<typeof PERFORMANCES_KEYS.rank>
    >,
    'getNextPageParam'
  >,
): UseInfiniteQueryResult<PerformanceResponseWithPages<PerformanceRankResponse>, AxiosError> => {
  return useInfiniteQuery(
    PERFORMANCES_KEYS.rank(params),
    ({ queryKey: [, , params], pageParam = 1 }) => {
      const _params = params as PerformanceRankParams;
      return performanceService.getPerformanceByRank({
        ..._params,
        page: pageParam,
      });
    },
    {
      ...config,
      getNextPageParam: (lastPage, allPages) => {
        console.log({ lastPage, allPages });
        const isLastPage = lastPage.totalPages === lastPage.page || lastPage.totalPages === 0;
        return isLastPage ? undefined : lastPage.page + 1;
      },
    },
  );
};

export const useInfinitePerformanceQuery = (
  params: GetPerformancesParams,
  config?: Omit<
    UseInfiniteQueryOptions<
      PerformanceResponseWithPages<PerformanceResponse>,
      AxiosError,
      PerformanceResponseWithPages<PerformanceResponse>,
      PerformanceResponseWithPages<PerformanceResponse>,
      ReturnType<typeof PERFORMANCES_KEYS.list>
    >,
    'getNextPageParam'
  >,
): UseInfiniteQueryResult<PerformanceResponseWithPages<PerformanceResponse>, AxiosError> => {
  return useInfiniteQuery(
    PERFORMANCES_KEYS.list(params),
    ({ queryKey: [, , params], pageParam = 0 }) => {
      const _params = params as GetPerformancesParams;
      return performanceService.getPerformances({
        ..._params,
        page: pageParam,
      });
    },
    {
      ...config,
      getNextPageParam: (lastPage, allPages) => {
        console.log({ lastPage, allPages });
        const isLastPage = lastPage.totalPages === lastPage.page || lastPage.totalPages === 0;
        return isLastPage ? undefined : lastPage.page + 1;
      },
    },
  );
};

export const useInfiniteSearchPerformanceQuery = (
  params: SearchPerformanceParams,
  config?: Omit<
    UseInfiniteQueryOptions<
      PerformanceResponseWithPages<PerformanceResponse>,
      AxiosError,
      PerformanceResponseWithPages<PerformanceResponse>,
      PerformanceResponseWithPages<PerformanceResponse>,
      ReturnType<typeof PERFORMANCES_KEYS.search>
    >,
    'getNextPageParam'
  >,
): UseInfiniteQueryResult<PerformanceResponseWithPages<PerformanceResponse>, AxiosError> => {
  return useInfiniteQuery(
    PERFORMANCES_KEYS.search(params),
    ({ queryKey: [, , params], pageParam = 1 }) => {
      const _params = params as SearchPerformanceParams;
      return performanceService.searchPerformances({
        ..._params,
        page: pageParam,
      });
    },
    {
      ...config,
      getNextPageParam: (lastPage, allPages) => {
        console.log({ lastPage, allPages });
        const isLastPage = lastPage.totalPages === lastPage.page || lastPage.totalPages === 0;
        return isLastPage ? undefined : lastPage.page + 1;
      },
    },
  );
};
