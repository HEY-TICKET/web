import { PerformancesResponses } from 'apis/performance/type';
import Card from 'components/common/Card/Card';

import * as Styles from './CardList.styles';

type Props = {
  data: PerformancesResponses[];
  onClick?: (id: PerformancesResponses['mt20id']) => void;
};

const CardList = ({ data, onClick }: Props) => {
  return (
    <Styles.CardListWrapper>
      {data.map((item) => {
        return <Card key={item.mt20id} {...item} onClick={onClick} />;
      })}
    </Styles.CardListWrapper>
  );
};

export default CardList;
