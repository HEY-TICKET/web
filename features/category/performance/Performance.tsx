'use client';

import { useRouter } from 'next/navigation';

import DetailCard from 'components/common/Card/DetailCard';
import OtherPerformances from 'features/category/performance/OtherPerformances';
import * as Styles from 'features/category/performance/Performance.styles';
import PerformanceDetail from 'features/category/performance/PerformanceDetail';
import PerformanceETC from 'features/category/performance/PerformanceETC';
import PerformanceInfo from 'features/category/performance/PerformanceInfo';
import { useDetailPerformanceQuery } from 'reactQuery/performance';
import { ArrowRight } from 'styles/icons';

const Performance = ({ id, title }: { id: string; title: string }) => {
  // TODO : prefetch 적용 필요 (이미지 로딩이 느림)
  const { data } = useDetailPerformanceQuery({ id: id }, { enabled: !!id });

  const { back } = useRouter();

  const goToBack = () => back();

  if (!data) return <></>;

  return (
    <>
      <Styles.GenreHeader>
        <Styles.LeftIconWrapper onClick={goToBack}>
          <ArrowRight size={28} />
        </Styles.LeftIconWrapper>
        <Styles.Title>{title}</Styles.Title>
      </Styles.GenreHeader>
      <Styles.CardWrapper>
        <DetailCard data={data} />
      </Styles.CardWrapper>
      <Styles.InfoContainer>
        <PerformanceInfo data={data} />
        <PerformanceDetail data={data} />
        <OtherPerformances />
        <PerformanceETC data={data} />
      </Styles.InfoContainer>
    </>
  );
};

export default Performance;
