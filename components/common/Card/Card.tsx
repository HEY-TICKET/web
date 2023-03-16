import dayjs from 'dayjs';

import { PerformancesResponses } from 'apis/performance/type';
import Badge from 'components/common/Badge/Badge';
import Ellipsis from 'components/common/Ellipsis';
import { getDateDiff, getDayOfWeek } from 'utils/times';

import * as Styles from './Card.styles';

interface CardProps extends PerformancesResponses {
  onClick?: (id: PerformancesResponses['mt20id']) => void;
}

const Card = ({
  mt20id,
  title,
  place,
  startDate,
  endDate,
  poster,
  pcseguidance,
  onClick,
}: CardProps) => {
  const today = dayjs(new Date()).format('YYYY.MM.DD');
  const restDate = getDateDiff(today, startDate);

  const _startDate = `${startDate}(${getDayOfWeek(startDate, 'ko')})`;
  const _endDate = `${endDate}(${getDayOfWeek(endDate, 'ko')})`;

  const date = _startDate === _endDate ? _endDate : `${_startDate} ~ ${_endDate}`;

  const isRunning = restDate > 0;
  const dDay = Math.floor(restDate);
  const isSrcValid =
    poster.startsWith('/') || poster.startsWith('http://') || poster.startsWith('https://');

  return (
    <Styles.CardContainer onClick={() => onClick?.(mt20id)}>
      {/*TODO : 이미지가 유효하지 않은 값이 오거나 없는 경우 default 이미지를 렌더링 시켜야 함*/}
      {isSrcValid && (
        <Styles.CardImageWrapper>
          <Styles.CardImage src={poster} width={195} height={275} alt={'poster'} />
        </Styles.CardImageWrapper>
      )}
      <Styles.ContentsWrapper>
        <Styles.InfoWrapper>
          {isRunning ? (
            <Badge colorTheme={'green'}>{`공연 중`}</Badge>
          ) : (
            <Badge>{`D-${dDay}`}</Badge>
          )}
          <Styles.CardTitle>
            <Ellipsis>{title}</Ellipsis>
          </Styles.CardTitle>
          <Styles.CardDescription>{place}</Styles.CardDescription>
          <Styles.CardDescription>{date}</Styles.CardDescription>
        </Styles.InfoWrapper>

        <Styles.PriceWrapper>
          <span>예매가</span>
          {/*<p>{(1234).addComma()}</p>*/}
          {/*<p>{`12,000 ~ 30,000`}</p>*/}
          <p>{pcseguidance}</p>
        </Styles.PriceWrapper>
      </Styles.ContentsWrapper>
    </Styles.CardContainer>
  );
};

export default Card;
