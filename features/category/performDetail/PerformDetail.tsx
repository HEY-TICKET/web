'use client';

import { useRouter } from 'next/navigation';

import { PerformancesResponses } from 'apis/performance/type';
import Card from 'components/common/Card/Card';
import * as Styles from 'features/category/performDetail/PerformDetail.styles';
import { useDetailPerformanceQuery } from 'reactQuery/performance';
import { ArrowRight } from 'styles/icons';

const PerformDetail = ({ id }: { id: string }) => {
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
        <Styles.Title>{'콘서트'}</Styles.Title>
      </Styles.GenreHeader>
      <Styles.CardWrapper>
        <Card {...(data as PerformancesResponses)} />
      </Styles.CardWrapper>
    </>
  );
};

export default PerformDetail;
