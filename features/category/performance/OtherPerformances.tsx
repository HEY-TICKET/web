import { PerformanceParams } from 'apis/performance/type';
import * as Styles from 'features/category/performance/Performance.styles';
import { useRecommendationPerformanceQuery } from 'reactQuery/performance';

const OtherPerformances = ({ id }: PerformanceParams) => {
  const { data } = useRecommendationPerformanceQuery({ id }, { enabled: !!id });

  console.log('data', data);

  return (
    <Styles.InfoWrapper>
      <Styles.InfoTitle>이런 공연은 어때요?</Styles.InfoTitle>
    </Styles.InfoWrapper>
  );
};

export default OtherPerformances;
