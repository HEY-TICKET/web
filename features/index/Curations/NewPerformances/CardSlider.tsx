'use client';

import { HTMLAttributes } from 'react';

import { useRouter } from 'next/navigation';

import Card from 'components/common/Card/Card';
import Slider from 'components/common/Slider/Slider';
import { ROUTES } from 'constants/routes';
import Curation from 'features/index/Curation';
import { useNewPerformanceQuery } from 'reactQuery/performance';
import { GenreTypes } from 'types/performance';

interface CardSliderProps extends HTMLAttributes<HTMLElement> {
  genre: GenreTypes;
}

const CardSlider = ({ genre }: CardSliderProps) => {
  const { push } = useRouter();

  const { data } = useNewPerformanceQuery(
    {
      genre: genre,
      sortOrder: 'DESC',
      sortType: 'CREATED_DATE',
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
    <Slider skipCount={1} fallback={<Curation.CardSliderFallback />}>
      {cards.map((item, index) => (
        <Card key={index} data={item} onClick={clickCard} type={'simple'} />
      ))}
    </Slider>
  );
};

export default CardSlider;
