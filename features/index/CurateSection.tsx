'use client';

import { HTMLAttributes, useState } from 'react';

import Card from 'components/common/Card/Card';
import Chip from 'components/common/Chip/Chip';
import * as Styles from 'features/index/CurateSection.styles';
import { usePerformanceQuery } from 'reactQuery/performance';
import { ArrowRight } from 'styles/icons';

interface CurateSectionProps extends HTMLAttributes<HTMLElement> {
  chips: { caption: string }[];
}

const CurateSection = ({ chips }: CurateSectionProps) => {
  const [genre, setGenre] = useState(chips[0].caption);
  console.log(genre);
  const { data } = usePerformanceQuery({ page: 1, size: 10 });

  return (
    <Styles.CurateSectionWrapper>
      <Styles.Header>
        <Styles.InfoTitle>공연 랭킹</Styles.InfoTitle>
        <Styles.ReadMoreButton>
          <span>더보기</span>
          <ArrowRight size={20} />
        </Styles.ReadMoreButton>
      </Styles.Header>
      <Styles.ChipContainer>
        {chips.map(({ caption }, index) => (
          <Chip key={index} text={caption} onClick={() => setGenre(caption)} />
        ))}
      </Styles.ChipContainer>
      <Styles.CardContainer>
        {data?.map((item) => {
          return <Card key={item.mt20id} data={item} />;
        })}
      </Styles.CardContainer>
    </Styles.CurateSectionWrapper>
  );
};

export default CurateSection;
