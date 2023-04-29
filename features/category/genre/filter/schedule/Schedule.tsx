import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import DatePicker from 'components/DatePicker/DatePicker';
import { FILTER_MODAL_DEFAULT_VALUES } from 'features/category/modal/CategoryFilterModal';
import STYLES from 'styles/index';

type Props = {
  name: keyof typeof FILTER_MODAL_DEFAULT_VALUES;
};

const Schedule = ({ name }: Props) => {
  const { control } = useFormContext();

  return (
    <Wrapper>
      <span>선택한 날짜 이후의 공연이 보여져요</span>
      <DatePicker name={name} control={control} />
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

    color: ${STYLES.color.orange};
  }
`;
