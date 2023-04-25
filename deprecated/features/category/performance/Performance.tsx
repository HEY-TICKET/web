'use client';

import { useRouter } from 'next/navigation';

import DetailCard from 'deprecated/components/common/Card/DetailCard';
import Footer from 'deprecated/features/category/performance/Footer';
import OtherPerformances from 'deprecated/features/category/performance/OtherPerformances';
import * as Styles from 'deprecated/features/category/performance/Performance.styles';
import PerformanceDetail from 'deprecated/features/category/performance/PerformanceDetail';
import PerformanceETC from 'deprecated/features/category/performance/PerformanceETC';
import PerformanceInfo from 'deprecated/features/category/performance/PerformanceInfo';
import { ArrowRight } from 'deprecated/styles/icons';
import { useDetailPerformanceQuery } from 'reactQuery/performance';
import { usePlaceQuery } from 'reactQuery/place';

const Performance = ({ id, title }: { id: string; title: string }) => {
  const { back } = useRouter();
  // TODO : prefetch 적용 필요 (이미지 로딩이 느림)
  const { data } = useDetailPerformanceQuery({ id: id }, { enabled: !!id });

  const placeId = data?.mt10id || '';
  const { data: placeData } = usePlaceQuery({ placeId: placeId }, { enabled: !!data?.mt10id });

  const goToBack = () => back();

  if (!data || !placeData) return <></>; // FIXME: 404 페이지로 전환

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
        <PerformanceInfo data={data} placeData={placeData} />
        <PerformanceDetail data={data} />
        <OtherPerformances />
        <PerformanceETC data={data} placeData={placeData} />
      </Styles.InfoContainer>
      <Styles.FooterWrapper>
        <Footer />
      </Styles.FooterWrapper>
    </>
  );
};

export default Performance;
