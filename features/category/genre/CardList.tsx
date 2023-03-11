import dayjs from 'dayjs';

import Card from 'components/common/Card/Card';
import { CardListItem } from 'constants/cardData';
import { getDateDiff, getDayOfWeek } from 'utils/times';

import * as Styles from './CardList.styles';

type Props = {
  data: CardListItem[];
};

const CardList = ({ data }: Props) => {
  const today = dayjs(new Date()).format('YYYY.MM.DD');

  return (
    <Styles.CardListWrapper>
      {data.map(({ id, poster, title, place, fromDate, toDate }) => {
        const restDate = getDateDiff(today, fromDate);

        const _toDate = `${toDate}(${getDayOfWeek(toDate, 'ko')})`;
        const _fromDate = `${fromDate}(${getDayOfWeek(fromDate, 'ko')})`;

        return (
          <Card
            key={id}
            src={poster}
            title={title}
            badgeDate={restDate}
            fromDate={_fromDate}
            toDate={_toDate}
            desc={place}
          />
        );
      })}
    </Styles.CardListWrapper>
  );
};

export default CardList;
