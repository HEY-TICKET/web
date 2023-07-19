import { HTMLAttributes } from 'react';

import { PerformanceResponse } from 'apis/performance/type';
import Badge from 'components/common/Badge/Badge';
import Poster from 'components/common/Card/Poster';
import { getDday, getPeriod, performanceStatus } from 'utils/times';

import * as Styles from './DetailCard.styles';

interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  onClick?: (id: PerformanceResponse['id']) => void;
  data: PerformanceResponse;
}

const DetailCard = ({ data, onClick }: CardProps) => {
  const { id, title, startDate, endDate, poster } = data;

  const period = getPeriod(startDate, endDate);

  const status = performanceStatus(startDate, endDate);

  const isSrcValid =
    poster.startsWith('/') || poster.startsWith('http://') || poster.startsWith('https://');

  const renderBadge = () => {
    switch (status) {
      case 'UPCOMING':
        return <Badge colorTheme={'blue25'}>{`${getDday(startDate)}`}</Badge>;
      case 'ONGOING':
        return <Badge colorTheme={'green25'}>{`공연 중`}</Badge>;
      case 'COMPLETED':
        return <Badge>{`공연 종료`}</Badge>;
    }
  };

  return (
    <Styles.CardContainer onClick={() => onClick?.(id)}>
      {/*TODO : 이미지가 유효하지 않은 값이 오거나 없는 경우 default 이미지를 렌더링 시켜야 함*/}
      {isSrcValid && (
        <Styles.PosterWrapper>
          <Poster src={poster} alt={'poster'} height={400} />
        </Styles.PosterWrapper>
      )}
      <Styles.ContentsWrapper>
        <Styles.InfoWrapper>
          {renderBadge()}
          <Styles.CardTitle>{title}</Styles.CardTitle>
          <Styles.CardDescription>{period}</Styles.CardDescription>
        </Styles.InfoWrapper>
      </Styles.ContentsWrapper>
    </Styles.CardContainer>
  );
};

export default DetailCard;
