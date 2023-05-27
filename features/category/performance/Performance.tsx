'use client';

import { useRouter } from 'next/navigation';

import DetailCard from 'components/common/Card/DetailCard';
import Footer from 'features/category/performance/Footer';
import OtherPerformances from 'features/category/performance/OtherPerformances';
import * as Styles from 'features/category/performance/Performance.styles';
import PerformanceDetail from 'features/category/performance/PerformanceDetail';
import PerformanceETC from 'features/category/performance/PerformanceETC';
import PerformanceInfo from 'features/category/performance/PerformanceInfo';
import { usePerformanceDetailQuery } from 'reactQuery/performance';
import { ArrowRight } from 'styles/icons';

const Performance = ({ id, title }: { id: string; title: string }) => {
  const { back } = useRouter();

  const { data } = usePerformanceDetailQuery({ id: id }, { enabled: !!id });

  const goToBack = () => back();

  if (!data) return <></>; // FIXME: 404 페이지로 전환

  return (
    <Styles.Container>
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
      <Styles.FooterWrapper>
        <Footer />
      </Styles.FooterWrapper>
    </Styles.Container>
  );
};

export default Performance;
