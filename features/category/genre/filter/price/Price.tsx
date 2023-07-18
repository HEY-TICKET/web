import styled from 'styled-components';

import RadioList from 'components/common/List/RadioList';
import { PRICE_LIST } from 'constants/performance/common';
import STYLES from 'styles/index';

type Props = {
  name: string;
};

type PriceRange = { minPrice?: number; maxPrice?: number };

const Price = ({ name }: Props) => {
  return (
    <Wrapper>
      <span>낮은 예매가 기준으로 적용돼요</span>
      <RadioList<PriceRange> list={PRICE_LIST} name={name} useForm={true} />
    </Wrapper>
  );
};

export default Price;

const Wrapper = styled.div`
  padding: 0 20px;
  & > span {
    display: flex;
    align-items: center;

    padding: 8px 0;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: ${STYLES.color.orange};
  }
`;
