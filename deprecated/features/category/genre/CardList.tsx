import { PerformancesResponses } from 'apis/performance/type';
import Card from 'deprecated/components/common/Card/Card';

import * as Styles from './CardList.styles';

type Props = {
  data: PerformancesResponses[];
  onClick?: (id: PerformancesResponses['mt20id']) => void;
  loading: boolean;
};

const CardList = ({ data, loading, onClick }: Props) => {
  return (
    <Styles.CardListWrapper>
      {data.map((item) => {
        return (
          <Card key={item.mt10id + item.mt20id} data={item} loading={loading} onClick={onClick} />
        );
      })}
    </Styles.CardListWrapper>
  );
};

export default CardList;
