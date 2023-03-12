import dayjs from 'dayjs';

import { PerformancesResponses } from 'apis/performance/type';
import Card from 'components/common/Card/Card';
import { getDateDiff, getDayOfWeek } from 'utils/times';

import * as Styles from './CardList.styles';

type Props = {
  data: PerformancesResponses[];
};

const CardList = ({ data }: Props) => {
  const today = dayjs(new Date()).format('YYYY.MM.DD');

  return (
    <Styles.CardListWrapper>
      {data.map(({ mt20id, poster, title, place, startDate, endDate, pcseguidance }) => {
        const restDate = getDateDiff(today, startDate);

        const _startDate = `${startDate}(${getDayOfWeek(startDate, 'ko')})`;
        const _endDate = `${endDate}(${getDayOfWeek(endDate, 'ko')})`;

        return (
          <Card
            key={mt20id}
            src={poster}
            title={title}
            restDate={restDate}
            startDate={_startDate}
            endDate={_endDate}
            desc={place}
            price={pcseguidance}
          />
        );
      })}
    </Styles.CardListWrapper>
  );
};

export default CardList;
