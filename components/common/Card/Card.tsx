import * as Styles from './Card.styles';
import Badge from 'components/common/Badge/Badge';
import Ellipsis from 'components/common/Ellipsis';

interface CardProps {
  src: string;
  badgeDate: number;
  title: string;
  desc: string;
  fromDate: string;
  toDate: string;
}

const Card = ({ src, badgeDate, title, desc, fromDate, toDate }: CardProps) => {
  return (
    <Styles.CardContainer>
      <Styles.CardImage src={src} width={195} height={275} alt={'poster'} />
      <Styles.ContentsWrapper>
        {badgeDate <= 0 ? (
          <Badge colorTheme={'green'}>{`진행중`}</Badge>
        ) : (
          <Badge>{`D-${badgeDate}`}</Badge>
        )}
        <Styles.CardTitle>
          <Ellipsis>{title}</Ellipsis>
        </Styles.CardTitle>
        <Styles.CardDescription>{desc}</Styles.CardDescription>
        <Styles.CardDescription>{`${fromDate} ~ ${toDate}`}</Styles.CardDescription>
      </Styles.ContentsWrapper>

      <Styles.PriceWrapper>
        <span>예매가</span>
        {/*<p>{(1234).addComma()}</p>*/}
        <p>{`12,000 ~ 30,000`}</p>
      </Styles.PriceWrapper>
    </Styles.CardContainer>
  );
};

export default Card;
