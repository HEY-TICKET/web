'use client';

import dayjs from 'dayjs';
import { Control, Controller } from 'react-hook-form';

import * as Styles from 'components/DatePicker/DatePicker.styles';
import { IconWrapper } from 'components/DatePicker/DatePicker.styles';
import { DAY_OF_WEEK } from 'constants/date';
import { ArrowRight } from 'styles/icons';

interface PickerProps {
  name: string;
  control: Control;
}

type DayOfWeekType = keyof typeof DAY_OF_WEEK;

const DatePicker = ({ name, control }: PickerProps) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, value, ref } }) => {
        return (
          <Styles.DatePickerContainer>
            <Styles.DatePickerWrapper ref={ref}>
              <Styles.DatePicker
                renderCustomHeader={({
                  date,
                  // changeYear,
                  // changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  // prevMonthButtonDisabled,
                  // nextMonthButtonDisabled,
                }) => (
                  <Styles.CustomHeaderWrapper>
                    <IconWrapper $left={true} onClick={decreaseMonth}>
                      <ArrowRight />
                    </IconWrapper>
                    <Styles.DateButtonWrapper>
                      <Styles.DateButton>{dayjs(date).format('YYYY')}년</Styles.DateButton>
                      <Styles.DateButton>{dayjs(date).format('MM')}월</Styles.DateButton>
                    </Styles.DateButtonWrapper>
                    <IconWrapper onClick={increaseMonth}>
                      <ArrowRight />
                    </IconWrapper>
                  </Styles.CustomHeaderWrapper>
                )}
                formatWeekDay={(nameOfDay) => {
                  const day = nameOfDay.toString().substring(0, 3) as DayOfWeekType;
                  return DAY_OF_WEEK[day];
                }}
                onChange={onChange}
                selected={value as Date}
                inline
              />
            </Styles.DatePickerWrapper>
          </Styles.DatePickerContainer>
        );
      }}
      name={name}
    />
  );
};

export default DatePicker;
