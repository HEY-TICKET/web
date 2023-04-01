import { HTMLAttributes } from 'react';

import { PerformancesResponses } from 'apis/performance/type';
import Badge from 'components/common/Badge/Badge';
import Poster from 'components/common/Card/Poster';
import { getDateDiff, getPeriod } from 'utils/times';

import * as Styles from './DetailCard.styles';

interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  onClick?: (id: PerformancesResponses['mt20id']) => void;
  data: PerformancesResponses;
}

const DetailCard = ({ data, onClick }: CardProps) => {
  const { mt20id, title, startDate, endDate, poster } = data;
  const restDate = getDateDiff(startDate);

  const period = getPeriod(startDate, endDate);

  const isRunning = restDate > 0;
  const dDay = Math.floor(restDate);
  const isSrcValid =
    poster.startsWith('/') || poster.startsWith('http://') || poster.startsWith('https://');

  return (
    <Styles.CardContainer onClick={() => onClick?.(mt20id)}>
      {/*TODO : 이미지가 유효하지 않은 값이 오거나 없는 경우 default 이미지를 렌더링 시켜야 함*/}
      {isSrcValid && (
        <Styles.PosterWrapper>
          <Poster src={poster} width={280} height={400} alt={'poster'} />
        </Styles.PosterWrapper>
      )}
      <Styles.ContentsWrapper>
        <Styles.InfoWrapper>
          {isRunning ? (
            <Badge>{`공연 중`}</Badge>
          ) : (
            <Badge colorTheme={'blue25'}>{`D-${dDay}`}</Badge>
          )}
          <Styles.CardTitle>{title}</Styles.CardTitle>
          <Styles.CardDescription>{period}</Styles.CardDescription>
        </Styles.InfoWrapper>
      </Styles.ContentsWrapper>
    </Styles.CardContainer>
  );
};

export default DetailCard;