'use client';

import { useRouter } from 'next/navigation';

import { PerformancesResponses } from 'apis/performance/type';
import DetailCard from 'components/common/Card/DetailCard';
import OtherPerformances from 'features/category/performance/OtherPerformances';
import * as Styles from 'features/category/performance/Performance.styles';
import PerformanceDetail from 'features/category/performance/PerformanceDetail';
import PerformanceETC from 'features/category/performance/PerformanceETC';
import PerformanceInfo from 'features/category/performance/PerformanceInfo';
import { useDetailPerformanceQuery } from 'reactQuery/performance';
import { ArrowRight } from 'styles/icons';

const Performance = ({ id, title }: { id: string; title: string }) => {
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
        <DetailCard {...(data as PerformancesResponses)} />
      </Styles.CardWrapper>
      <Styles.InfoContainer>
        <PerformanceInfo />
        <PerformanceDetail />
        <OtherPerformances />
        <PerformanceETC />
      </Styles.InfoContainer>
    </>
  );
};

export default Performance;
