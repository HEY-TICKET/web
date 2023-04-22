'use client';

import { HTMLAttributes, useState } from 'react';

import { useRouter } from 'next/navigation';

import Card from 'components/common/Card/Card';
import Chip from 'components/common/Chip/Chip';
import Slider from 'components/common/Slider/Slider';
import { ROUTES } from 'constants/routes';
import * as Styles from 'features/index/CurateSection.styles';
import { usePerformanceQuery } from 'reactQuery/performance';
import { ArrowRight } from 'styles/icons';

interface CurateSectionProps extends HTMLAttributes<HTMLElement> {
  chips: { caption: string; value: string }[];
}

const CurateSection = ({ chips }: CurateSectionProps) => {
  const { push } = useRouter();
  const [genre, setGenre] = useState(chips[0].value);
  const { data, isLoading } = usePerformanceQuery({ page: 0, size: 10 });

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
      <Styles.ChipContainer>
        {chips.map(({ caption, value }, index) => (
          <Chip key={index} text={caption} onClick={() => setGenre(value)} />
        ))}
      </Styles.ChipContainer>
      <Slider sliderWidth={148 * 3 + 16 * 4}>
        {data?.map((item, index) => {
          return (
            <Card
              key={item.mt20id}
              data={item}
              loading={isLoading}
              onClick={clickCard}
              type={'simple'}
              rank={index + 1}
            />
          );
        })}
      </Slider>
    </Styles.CurateSectionWrapper>
  );
};

export default CurateSection;
