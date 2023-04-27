'use client';

import { useCallback } from 'react';

import Card from 'components/Common/Card/Card';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { useInfinitePerformanceQuery } from 'reactQuery/performance';

const SubCategory = () => {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfinitePerformanceQuery(
    {
      page: 0,
      size: 24,
    },
    { keepPreviousData: true },
  );

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([{ isIntersecting }]) => {
      if (hasNextPage && isIntersecting && !isFetchingNextPage) {
        await fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );
  const { setTarget } = useIntersectionObserver({ onIntersect });

  return (
    <div>
      <section className={'grid grid-cols-3 place-items-center gap-4 px-4 py-4'}>
        {data?.pages
          .flat()
          .map(({ mt20id, poster, title, place, startDate, endDate, pcseguidance }) => (
            <Card
              key={mt20id}
              src={poster}
              alt={`poster`}
              dDay={'D-5'}
              title={title}
              place={place}
              period={`${startDate}~${endDate}`}
              price={pcseguidance}
            />
          ))}
      </section>
      <div ref={setTarget} />
    </div>
  );
};

export default SubCategory;
