'use client';

import { HTMLAttributes } from 'react';

import { useRouter } from 'next/navigation';

import { PerformanceRankParams } from 'apis/performance/type';
import Card from 'components/common/Card/Card';
import Slider from 'components/common/Slider/Slider';
import { ROUTES } from 'constants/routes';
import Curation from 'features/index/Curation';
import { useRankPerformanceQuery } from 'reactQuery/performance';

interface CardSliderProps extends HTMLAttributes<HTMLElement> {
  genre: PerformanceRankParams['genre'];
}

const CardSlider = ({ genre }: CardSliderProps) => {
  const { push } = useRouter();

  const { data } = useRankPerformanceQuery(
    {
      timePeriod: 'DAY',
      genre: genre,
      pageSize: 10,
      page: 0,
    },
    { suspense: true, retry: false },
  );

  const cards = data?.contents ?? [];

  const clickCard = (id: string) => {
    push(`${ROUTES.category}/${genre}/${id}`);
  };

  return (
    <Slider skipCount={3} fallback={<Curation.CardSliderFallback />}>
      {cards.map((item, index) => (
        <Card key={index} data={item} onClick={clickCard} type={'simple'} rank={item.rank} />
      ))}
    </Slider>
  );
};

export default CardSlider;
