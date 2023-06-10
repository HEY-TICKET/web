import { PerformanceCommonResponse } from 'apis/performance/type';
import Card from 'components/common/Card/Card';

import * as Styles from './CardList.styles';

type Props = {
  data: PerformanceCommonResponse[];
  onClick?: (id: PerformanceCommonResponse['id']) => void;
  loading: boolean;
  hasRank?: boolean;
};

const CardList = ({ data, loading, onClick, hasRank = false }: Props) => {
  return (
    <Styles.CardListWrapper>
      {data.map((item, index) => {
        return (
          <Card
            key={item.id}
            data={item}
            loading={loading}
            onClick={onClick}
            {...(hasRank && { rank: index + 1 })}
          />
        );
      })}
    </Styles.CardListWrapper>
  );
};

export default CardList;
