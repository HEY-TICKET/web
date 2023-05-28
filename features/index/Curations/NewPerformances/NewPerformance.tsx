'use client';

import React, { Suspense, useState } from 'react';

import styled from 'styled-components';

import { PerformanceNewParams } from 'apis/performance/type';
import Card from 'components/common/Card/Card';
import Chip from 'components/common/Chip/Chip';
import { PERFORMANCE_GENRE_MAP } from 'constants/new/performance';
// import ErrorBoundary from 'core/ErrorBoundary';
import Curation from 'features/index/Curation';
import CardSlider from 'features/index/Curations/NewPerformances/CardSlider';

const NEW_PERFORMANCE_GENRE_MAP = PERFORMANCE_GENRE_MAP;

const NewPerformance = () => {
  const [genre, setGenre] = useState<PerformanceNewParams['genre']>('THEATER');

  return (
    <Curation title={'새로 나온 공연'}>
      <ChipsWrap>
        {NEW_PERFORMANCE_GENRE_MAP.map(({ caption, value }, index) => (
          <Chip
            key={index}
            active={value === genre}
            text={caption}
            onClick={() => setGenre(value)}
          />
        ))}
      </ChipsWrap>
      <CardSliderWrap>
        {/*<ErrorBoundary fallback={<div>에러발생 현재는 데이터가 없음..?!</div>} key={genre}>*/}
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
        {/*</ErrorBoundary>*/}
      </CardSliderWrap>
    </Curation>
  );
};

export default NewPerformance;

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
