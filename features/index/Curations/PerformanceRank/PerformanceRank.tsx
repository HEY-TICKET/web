'use client';

import React, { useState } from 'react';

import styled from 'styled-components';

import Card from 'components/common/Card/Card';
import Chip from 'components/common/Chip/Chip';
import { BOX_OFFICE_GENRE_LIST_MAP } from 'constants/performance/common';
import CustomSuspense from 'core/CustomSuspense';
import ErrorBoundary from 'core/ErrorBoundary';
import Curation from 'features/index/Curation';
import CardSlider from 'features/index/Curations/PerformanceRank/CardSlider';
import { BoxOfficeGenreTypes } from 'types/performance';

const PerformanceRank = () => {
  const [genre, setGenre] = useState<BoxOfficeGenreTypes>('ALL');

  return (
    <Curation
      title={'공연 랭킹'}
      readMoreLinkProps={{ href: { pathname: `/category/${genre}`, query: { rank: true } } }}
    >
      <ChipsWrap>
        {BOX_OFFICE_GENRE_LIST_MAP.map(({ caption, value }, index) => (
          <Chip
            key={index}
            active={value === genre}
            text={caption}
            onClick={() => setGenre(value)}
          />
        ))}
      </ChipsWrap>
      <CardSliderWrap>
        <ErrorBoundary fallback={<Curation.CardSliderFallback />} key={genre}>
          <CustomSuspense
            fallback={
              <Wrap>
                {Array.from({ length: 5 }, (x) => x).map((value, index) => (
                  <Card.Skeleton key={index} type={'simple'} />
                ))}
              </Wrap>
            }
          >
            <CardSlider genre={genre} />
          </CustomSuspense>
        </ErrorBoundary>
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
  overflow: auto;
`;

const CardSliderWrap = styled.div`
  padding: 24px 16px;
`;
