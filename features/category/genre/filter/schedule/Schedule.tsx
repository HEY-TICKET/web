import styled from 'styled-components';

import DatePicker from 'components/DatePicker/DatePicker';

const Schedule = () => {
  const handleChange = (data: Date | (Date | null)[] | null) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <span>선택한 날짜 이후의 공연이 보여져요</span>
      <DatePicker onChange={handleChange} withHeader={false} />
    </Wrapper>
  );
};

export default Schedule;

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
