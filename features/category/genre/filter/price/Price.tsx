import styled from 'styled-components';

import RadioList from 'components/common/List/RadioList';

type Props = {
  name: string;
};

const Price = ({ name }: Props) => {
  const list = ['전체', '1만원 미만', '1 ~ 4만원', '4 ~ 7만원', '7 ~ 10만원', '10만원 이상'];
  return (
    <Wrapper>
      <span>낮은 예매가 기준으로 적용돼요</span>
      <RadioList list={list} name={name} useForm={true} />
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

    color: ${({ theme }) => theme.COLOR.orange};
  }
`;
