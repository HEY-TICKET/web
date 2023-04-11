import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

import placeService from 'apis/place';
import { GetPlaceParams, GetPlaceReturnValue } from 'apis/place/type';

const PLACE_KEYS = {
  all: ['place'],
  places: () => [...PLACE_KEYS.all, 'place'],
  place: (params: GetPlaceParams) => [...PLACE_KEYS.places(), params],
} as const;

export const usePlaceQuery = (
  params: GetPlaceParams,
  config?: Omit<
    UseQueryOptions<
      GetPlaceReturnValue,
      AxiosError,
      GetPlaceReturnValue,
      ReturnType<typeof PLACE_KEYS.place>
    >,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery(PLACE_KEYS.place(params), () => placeService.getPlace(params), { ...config });
};
