'use client';

import { HTMLAttributes } from 'react';

import { useRouter } from 'next/navigation';

import Card from 'components/common/Card/Card';
import Slider from 'components/common/Slider/Slider';
import { ROUTES } from 'constants/routes';
import Curation from 'features/index/Curation';
import { useRankPerformanceQuery } from 'reactQuery/performance';
import { BoxOfficeGenreTypes } from 'types/performance';

interface CardSliderProps extends HTMLAttributes<HTMLElement> {
  genre: BoxOfficeGenreTypes;
}

const CardSlider = ({ genre }: CardSliderProps) => {
  const { push } = useRouter();

  const { data } = useRankPerformanceQuery(
    {
      timePeriod: 'DAY',
      boxOfficeGenre: genre,
      boxOfficeArea: 'ALL',
      pageSize: 10,
      page: 1,
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
