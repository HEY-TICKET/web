import { HTMLAttributes } from 'react';

import { PerformancesResponses } from 'apis/performance/type';
import Badge from 'deprecated/components/common/Badge/Badge';
import Poster from 'deprecated/components/common/Card/Poster';
import Skeleton from 'deprecated/components/common/Skeleton/Skeleton';
import { getDateDiff, getPeriod } from 'utils/times';

import * as Styles from './Card.styles';

type CardType = 'default' | 'simple';

interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  onClick?: (id: PerformancesResponses['mt20id']) => void;
  data: PerformancesResponses;
  loading: boolean;
  type?: CardType;
  rank?: number;
}

const Card = ({ data, loading, onClick, type = 'default', rank }: CardProps) => {
  const { mt20id, title, place, startDate, endDate, poster, pcseguidance } = data;

  const restDate = getDateDiff(startDate);

  const date = getPeriod(startDate, endDate);

  const isRunning = restDate > 0;
  const dDay = Math.floor(restDate);
  const isSrcValid =
    poster?.startsWith('/') || poster?.startsWith('http://') || poster?.startsWith('https://');

  if (loading) return <Card.Skeleton type={type} />;

  if (type === 'simple') {
    return (
      <Styles.CardContainer onClick={() => onClick?.(mt20id)}>
        {/*TODO : 이미지가 유효하지 않은 값이 오거나 없는 경우 default 이미지를 렌더링 시켜야 함*/}
        {isSrcValid && <Poster src={poster} width={148} alt={'poster'} rank={rank} />}
        <Styles.ContentsWrapper>
          <Styles.InfoWrapper>
            <Styles.SimpleCardDescription>{place}</Styles.SimpleCardDescription>
            <Styles.CardTitle>{title}</Styles.CardTitle>
            <Styles.PerformanceDate $isRunning={isRunning}>
              <span>{isRunning ? '공연 중' : `D-${dDay}`}</span>
              <Styles.SimpleCardDescription>
                {isRunning ? `${endDate} 종료` : `${startDate} 시작`}
              </Styles.SimpleCardDescription>
            </Styles.PerformanceDate>
          </Styles.InfoWrapper>
        </Styles.ContentsWrapper>
      </Styles.CardContainer>
    );
  }

  return (
    <Styles.CardContainer onClick={() => onClick?.(mt20id)}>
      {/*TODO : 이미지가 유효하지 않은 값이 오거나 없는 경우 default 이미지를 렌더링 시켜야 함*/}
      {isSrcValid && <Poster src={poster} alt={'poster'} />}
      <Styles.ContentsWrapper>
        <Styles.InfoWrapper>
          {isRunning ? (
            <Badge colorTheme={'green25'}>{`공연 중`}</Badge>
          ) : (
            <Badge colorTheme={'blue25'}>{`D-${dDay}`}</Badge>
          )}
          <Styles.CardTitle>{title}</Styles.CardTitle>
          <Styles.CardDescription>{place}</Styles.CardDescription>
          <Styles.CardDescription>{date}</Styles.CardDescription>
        </Styles.InfoWrapper>

        <Styles.PriceWrapper>
          <span>예매가</span>
          <p>{pcseguidance}</p>
        </Styles.PriceWrapper>
      </Styles.ContentsWrapper>
    </Styles.CardContainer>
  );
};

export default Card;

type CardSkeletonProps = {
  type: CardType;
};

Card.Skeleton = ({ type }: CardSkeletonProps) => {
  if (type === 'simple') {
    return (
      <Skeleton>
        <Skeleton.Block css={Styles.SimpleCardPosterStyle} />
        <Skeleton.Block css={Styles.SimpleCardDescriptionStyle} />
        <Skeleton.Block css={Styles.SimpleCardTitleStyle} />
        <Skeleton.Block css={Styles.SimpleCardSecondLineTitleStyle} />
        <Skeleton.FlexBox css={Styles.RowDivStyle}>
          <Skeleton.Block css={Styles.BadgeStyle} />
          <Skeleton.Block css={Styles.DateStyle} />
        </Skeleton.FlexBox>
      </Skeleton>
    );
  }

  return (
    <Skeleton>
      <Skeleton.Block css={Styles.DefaultCardPosterStyle} />
      <Skeleton.Block css={Styles.DefaultBadgeStyle} />
      <Skeleton.Block css={Styles.DefaultTitleStyle} />
      <Skeleton.Block css={Styles.DefaultSecondLineTitleStyle} />
      <Skeleton.Block css={Styles.DefaultDescriptionStyle} />
      <Skeleton.Block css={Styles.DefaultPriceTitle} />
      <Skeleton.Block css={Styles.DefaultPrice} />
    </Skeleton>
  );
};
