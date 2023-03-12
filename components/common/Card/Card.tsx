import Badge from 'components/common/Badge/Badge';
import Ellipsis from 'components/common/Ellipsis';

import * as Styles from './Card.styles';

interface CardProps {
  src: string;
  restDate: number;
  title: string;
  desc: string;
  startDate: string;
  endDate: string;
  price: string;
}

const Card = ({ src, restDate, title, desc, startDate, endDate, price }: CardProps) => {
  const date = startDate === endDate ? endDate : `${startDate} ~ ${endDate}`;

  const isRunning = restDate > 0;
  const dDay = Math.floor(restDate);
  const isSrcValid = src.startsWith('/') || src.startsWith('http://') || src.startsWith('https://');

  return (
    <Styles.CardContainer>
      {/*TODO : 이미지가 유효하지 않은 값이 오거나 없는 경우 default 이미지를 렌더링 시켜야 함*/}
      {isSrcValid && <Styles.CardImage src={src} width={195} height={275} alt={'poster'} />}
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
          <Styles.CardDescription>{desc}</Styles.CardDescription>
          <Styles.CardDescription>{date}</Styles.CardDescription>
        </Styles.InfoWrapper>

        <Styles.PriceWrapper>
          <span>예매가</span>
          {/*<p>{(1234).addComma()}</p>*/}
          {/*<p>{`12,000 ~ 30,000`}</p>*/}
          <p>{price}</p>
        </Styles.PriceWrapper>
      </Styles.ContentsWrapper>
    </Styles.CardContainer>
  );
};

export default Card;
