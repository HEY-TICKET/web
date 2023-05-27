'use client';

import React, { useState, Suspense } from 'react';

import styled from 'styled-components';

import { PerformanceRankParams } from 'apis/performance/type';
import Card from 'components/common/Card/Card';
import Chip from 'components/common/Chip/Chip';
import { PERFORMANCE_GENRE_MAP } from 'constants/new/performance';
import Curation from 'features/index/Curation';
import CardSlider from 'features/index/Curations/PerformanceRank/CardSlider';

const PERFORMANCE_RANK_GENRE_MAP = PERFORMANCE_GENRE_MAP;

const PerformanceRank = () => {
  const [genre, setGenre] = useState<PerformanceRankParams['genre']>(
    PERFORMANCE_RANK_GENRE_MAP[0].value,
  );

  return (
    <Curation title={'공연 랭킹'} readMoreLinkProps={{ href: '/' }}>
      <ChipsWrap>
        {PERFORMANCE_RANK_GENRE_MAP.map(({ caption, value }, index) => (
          <Chip
            key={index}
            active={value === genre}
            text={caption}
            onClick={() => setGenre(value)}
          />
        ))}
      </ChipsWrap>
      <CardSliderWrap>
        <Suspense
          fallback={
            <Wrap>
              {Array.from({ length: 5 }, (x) => x).map((value, index) => (
                <Card.Skeleton key={index} type={'simple'} />
              ))}
            </Wrap>
          }
        >
          <CardSlider genre={genre} />
        </Suspense>
      </CardSliderWrap>
    </Curation>
  );
};

export default PerformanceRank;

const Wrap = styled.div<{ clientX?: number }>`
  display: flex;
  column-gap: 16px;

  overflow: hidden;
`;

const ChipsWrap = styled.div`
  display: flex;
  column-gap: 8px;
  padding: 8px 16px;
`;

const CardSliderWrap = styled.div`
  padding: 24px 16px;
`;
