'use client';

import { HTMLAttributes, useState } from 'react';

import { useRouter } from 'next/navigation';
import { css } from 'styled-components';

import { PerformanceRankParams } from 'apis/New/performance/type';
import Card from 'components/common/Card/Card';
import Chip from 'components/common/Chip/Chip';
import Slider from 'components/common/Slider/Slider';
import { PERFORMANCE_GENRE_MAP } from 'constants/new/performance';
import { ROUTES } from 'constants/routes';
import * as Styles from 'features/index/CurateSection.styles';
import { usePerformanceRankQuery } from 'reactQuery/performance';
import { ArrowRight } from 'styles/icons';

interface CurateSectionProps extends HTMLAttributes<HTMLElement> {
  chips: typeof PERFORMANCE_GENRE_MAP;
}

const RankSection = ({ chips }: CurateSectionProps) => {
  const { push } = useRouter();
  const [genre, setGenre] = useState<PerformanceRankParams['genre']>(chips[0].value);
  const { data, isLoading } = usePerformanceRankQuery(
    {
      timePeriod: 'DAY',
      date: '2023-05-22',
      genre: genre,
      pageSize: 10,
      page: 0,
    },
    { staleTime: Infinity },
  );

  console.log('data', data);

  const cards = data?.contents ?? [];

  const clickCard = (id: string) => {
    push(`${ROUTES.category}/${genre}/${id}`);
  };

  return (
    <Styles.CurateSectionWrapper>
      <Styles.Header>
        <Styles.InfoTitle>공연 랭킹</Styles.InfoTitle>
        <Styles.ReadMoreButton>
          <span>더보기</span>
          <ArrowRight size={20} />
        </Styles.ReadMoreButton>
      </Styles.Header>
      <Styles.ChipContainer
        css={css`
          overflow: auto;
        `}
      >
        {chips.map(({ caption, value }, index) => (
          <Chip
            key={index}
            active={value === genre}
            text={caption}
            onClick={() => setGenre(value)}
          />
        ))}
      </Styles.ChipContainer>
      <Slider viewedItemCount={3}>
        {cards.map((item) => {
          return (
            <Card
              key={item.id}
              data={item}
              loading={isLoading}
              onClick={clickCard}
              type={'simple'}
              rank={item.rank}
            />
          );
        })}
      </Slider>
    </Styles.CurateSectionWrapper>
  );
};

export default RankSection;
