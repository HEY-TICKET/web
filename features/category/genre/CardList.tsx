import { PerformanceRankResponse } from 'apis/performance/type';
import Card from 'components/common/Card/Card';

import * as Styles from './CardList.styles';

type Props = {
  data: PerformanceRankResponse[];
  onClick?: (id: PerformanceRankResponse['id']) => void;
  loading: boolean;
};

const CardList = ({ data, loading, onClick }: Props) => {
  return (
    <Styles.CardListWrapper>
      {data.map((item) => {
        return <Card key={item.id} data={item} loading={loading} onClick={onClick} />;
      })}
    </Styles.CardListWrapper>
  );
};

export default CardList;
