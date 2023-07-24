import { HTMLAttributes } from 'react';

import { PerformanceResponse } from 'apis/performance/type';
import Badge from 'components/common/Badge/Badge';
import Poster from 'components/common/Card/Poster';
import Skeleton from 'components/common/Skeleton/Skeleton';
import { STATUS_LIST_MAP } from 'constants/performance/common';
import STYLES from 'styles/index';
import { getDday, getPeriod, performanceStatus } from 'utils/times';

import * as Styles from './Card.styles';

type CardType = 'default' | 'simple';

interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'onClick'> {
  onClick?: (id: PerformanceResponse['id'], genre: PerformanceResponse['genre']) => void;
  data: PerformanceResponse;
  loading?: boolean;
  type?: CardType;
  rank?: number;
}

const Card = ({ data, onClick, type = 'default', rank, css }: CardProps) => {
  const { id, title, theater, startDate, endDate, poster, price, genre } = data;

  const date = getPeriod(startDate, endDate);

  const status = performanceStatus(startDate, endDate);

  const isSrcValid =
    poster?.startsWith('/') || poster?.startsWith('http://') || poster?.startsWith('https://');

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

  const renderColor = () => {
    switch (status) {
      case 'UPCOMING':
        return STYLES.color.blue50;
      case 'ONGOING':
        return STYLES.color.green50;
      case 'COMPLETED':
        return STYLES.color.gray400;
    }
  };

  if (type === 'simple') {
    return (
      <Styles.SimpleCardContainer onClick={() => onClick?.(id, genre)} css={css}>
        {/*TODO : 이미지가 유효하지 않은 값이 오거나 없는 경우 default 이미지를 렌더링 시켜야 함*/}
        {isSrcValid && <Poster src={poster} alt={'poster'} rank={rank} />}
        <Styles.ContentsWrapper>
          <Styles.SimpleInfoWrapper>
            <Styles.SimpleCardDescription>{theater}</Styles.SimpleCardDescription>
            <Styles.CardTitle>{title}</Styles.CardTitle>
            <Styles.PerformanceDate color={renderColor()}>
              <span>
                {STATUS_LIST_MAP.find(
                  ({ value }) => value === performanceStatus(startDate, endDate),
                )?.caption ?? ''}
              </span>
              <Styles.SimpleCardDescription>
                {status === 'ONGOING' ? `${endDate} 종료` : `${startDate} 시작`}
              </Styles.SimpleCardDescription>
            </Styles.PerformanceDate>
          </Styles.SimpleInfoWrapper>
        </Styles.ContentsWrapper>
      </Styles.SimpleCardContainer>
    );
  }

  return (
    <Styles.CardContainer onClick={() => onClick?.(id, genre)} css={css}>
      {/*TODO : 이미지가 유효하지 않은 값이 오거나 없는 경우 default 이미지를 렌더링 시켜야 함*/}
      {isSrcValid && <Poster src={poster} alt={'poster'} rank={rank} />}
      <Styles.ContentsWrapper>
        <Styles.InfoWrapper>
          {renderBadge()}
          <Styles.CardTitle>{title}</Styles.CardTitle>
          <Styles.CardDescription>{theater}</Styles.CardDescription>
          <Styles.CardDescription>{date}</Styles.CardDescription>
        </Styles.InfoWrapper>

        <Styles.PriceWrapper>
          <span>예매가</span>
          <p>{price}</p>
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
