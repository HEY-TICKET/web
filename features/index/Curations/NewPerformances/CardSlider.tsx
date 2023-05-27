'use client';

import { HTMLAttributes } from 'react';

import { useRouter } from 'next/navigation';

import { PerformanceNewParams } from 'apis/New/performance/type';
import Card from 'components/common/Card/Card';
import Slider from 'components/common/Slider/Slider';
import { ROUTES } from 'constants/routes';
import { usePerformanceNewQuery } from 'reactQuery/performance';

interface CardSliderProps extends HTMLAttributes<HTMLElement> {
  genre: PerformanceNewParams['genre'];
}

const CardSlider = ({ genre }: CardSliderProps) => {
  const { push } = useRouter();

  const { data } = usePerformanceNewQuery(
    {
      genre: genre,
      sortOrder: 'DESC',
      sortType: 'TIME',
      pageSize: 10,
      page: 0,
    },
    { suspense: true, useErrorBoundary: true },
  );

  const cards = data?.contents ?? [];

  const clickCard = (id: string) => {
    push(`${ROUTES.category}/${genre}/${id}`);
  };

  return (
    <Slider skipCount={1}>
      {cards.map((item, index) => (
        <Card key={index} data={item} onClick={clickCard} type={'simple'} />
      ))}
    </Slider>
  );
};

export default CardSlider;
