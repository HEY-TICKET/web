'use client';

import { useRouter } from 'next/navigation';

import DetailCard from 'components/common/Card/DetailCard';
import TopBar from 'components/common/Nav/TopBar';
import { GENRE_LIST_MAP } from 'constants/performance/common';
import Footer from 'features/category/performance/Footer';
import OtherPerformances from 'features/category/performance/OtherPerformances';
import * as Styles from 'features/category/performance/Performance.styles';
import PerformanceDetail from 'features/category/performance/PerformanceDetail';
import PerformanceETC from 'features/category/performance/PerformanceETC';
import PerformanceInfo from 'features/category/performance/PerformanceInfo';
import { usePerformanceByIdQuery } from 'reactQuery/performance';

const Performance = ({ id }: { id: string }) => {
  const { back } = useRouter();

  const { data } = usePerformanceByIdQuery({ id: id }, { enabled: !!id });

  const title = GENRE_LIST_MAP.find(({ value }) => value === data?.genre)?.caption ?? '전체';

  const goToBack = () => back();

  if (!data) return <></>; // FIXME: 404 페이지로 전환

  return (
    <Styles.Container>
      <TopBar
        leftProps={<TopBar.BackButton onClick={goToBack} />}
        middleProps={<TopBar.Title>{title}</TopBar.Title>}
      />
      <Styles.CardWrapper>
        <DetailCard data={data} />
      </Styles.CardWrapper>
      <Styles.InfoContainer>
        <PerformanceInfo data={data} />
        <PerformanceDetail data={data} />
        <OtherPerformances id={id} />
        <PerformanceETC data={data} />
      </Styles.InfoContainer>
      <Styles.FooterWrapper>
        <Footer />
      </Styles.FooterWrapper>
    </Styles.Container>
  );
};

export default Performance;
