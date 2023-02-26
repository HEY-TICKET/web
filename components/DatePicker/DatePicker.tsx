'use client';

import { useState } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import dayjs from 'dayjs';

import * as Styles from 'components/DatePicker/DatePicker.styles';
import useOutsideClick from 'hooks/useOutsideClick';
import { IconWrapper } from 'components/DatePicker/DatePicker.styles';
import { ArrowRight } from 'styles/icons';

interface PickerProps extends Omit<ReactDatePickerProps, 'onChange'> {
  onChange: (date: Date | null | (Date | null)[]) => void;
  withHeader?: boolean;
  withRange?: boolean;
}

export type DatePickerOnChangeProp = Date | null | (Date | null)[];

const DAY_OF_WEEK = {
  Mon: '월',
  Tue: '화',
  Wed: '수',
  Thu: '목',
  Fri: '금',
  Sat: '토',
  Sun: '일',
} as const;

type DayOfWeekType = keyof typeof DAY_OF_WEEK;

const DatePicker = ({
  withHeader = true,
  onChange,
  withRange = false,
  ...restProps
}: PickerProps) => {
  const ref = useOutsideClick<HTMLDivElement>({ onClick: () => setIsOpen(false) });
  const date = new Date();
  const nextDate = new Date(date.setDate(date.getDate() + 1));
  const [startDate, setStartDate] = useState<Date | null>(date);
  const [endDate, setEndDate] = useState<Date | null>(nextDate);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChange = (date: DatePickerOnChangeProp) => {
    if (Array.isArray(date)) {
      const [start, end] = date;
      setStartDate(start);
      setEndDate(end);
      if (end) {
        setIsOpen(!isOpen);
      }
    } else {
      setStartDate(date);
      setIsOpen(!isOpen);
    }
    onChange(date);
  };

  return (
    <Styles.DatePickerContainer>
      {withHeader && (
        <Styles.InputButton onClick={() => setIsOpen((prev) => !prev)} $withRange={withRange}>
          {`${dayjs(startDate).format('YYYY.MM.DD')} (${
            DAY_OF_WEEK[dayjs(startDate).format('ddd') as DayOfWeekType]
          })`}

          {withRange &&
            ` ~ ${dayjs(endDate ?? startDate).format('YYYY.MM.DD')} (${
              DAY_OF_WEEK[dayjs(endDate ?? startDate).format('ddd') as DayOfWeekType]
            })`}
        </Styles.InputButton>
      )}

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
          onChange={handleChange}
          // minDate={new Date()}
          inline
          selected={startDate}
          startDate={startDate}
          {...(withRange && { endDate: endDate, selectsRange: true })}
          {...restProps}
        />
      </Styles.DatePickerWrapper>
    </Styles.DatePickerContainer>
  );
};

export default DatePicker;
