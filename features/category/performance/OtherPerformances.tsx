import { useParams, useRouter } from 'next/navigation';
import styled, { css } from 'styled-components';

import { PerformanceResponse } from 'apis/performance/type';
import Card from 'components/common/Card/Card';
import { ROUTES } from 'constants/routes';
import * as Styles from 'features/category/performance/Performance.styles';
import { useRecommendationPerformanceQuery } from 'reactQuery/performance';

const OtherPerformances = ({ id }: Pick<PerformanceResponse, 'id'>) => {
  const { push } = useRouter();
  const params = useParams();

  const { data } = useRecommendationPerformanceQuery({ id }, { enabled: !!id });

  const clickCard = (id: PerformanceResponse['id']) => {
    push(`${ROUTES.category}/${params.genre}/${id}`);
  };

  const cards = data ?? [];

  return (
    <Styles.InfoWrapper>
      <Styles.InfoTitle>이런 공연은 어때요?</Styles.InfoTitle>
      <CardListWrap>
        {cards.map((card, index) => (
          // TODO : Card 컴포넌트 아이템 순서 및 노출 여부를 외부에서 변경할 수 있도록 수정
          <Card
            key={index}
            data={card}
            css={css`
              width: 100%;
            `}
            onClick={clickCard}
          />
        ))}
      </CardListWrap>
    </Styles.InfoWrapper>
  );
};

export default OtherPerformances;

const CardListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 12px;

  margin-top: 16px;
`;
