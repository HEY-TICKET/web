'use client';

import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';
import styled, { css } from 'styled-components';

import STYLES from 'styles/index';

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const CustomHeaderWrapper = styled.header`
  display: flex;
  //width: 250px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 8px 16px;
  background-color: ${STYLES.color.white};
`;

export const DateButtonWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

// TODO : ArrowButton 공통 스타일 constant 로 분리

export const IconWrapper = styled.div<{ left?: boolean }>`
  cursor: pointer;
`;

export const RotateIconWrapper = styled(IconWrapper)`
  & > svg {
    rotate: 180deg;
  }
  cursor: pointer;
`;

export const DateButton = styled.button`
  font-weight: 700;
`;

export const InputButton = styled(DateButton)<{ $withRange: boolean }>`
  ${({ $withRange }) => css`
    height: 40px;
    min-width: ${$withRange ? 230.37 : 125.15}px;
    padding: 8px 16px;
    border: 2px solid ${STYLES.color.gray900};
    border-radius: 4px;
  `};
`;

export const DatePickerWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  z-index: 1;

  background-color: ${STYLES.color.white};
  .react-datepicker {
    border: none;
  }

  .react-datepicker__input-container {
    border: 2px solid ${STYLES.color.gray900};
    border-radius: 4px;

    & > input {
      height: 40px;
      padding: 8px 16px;
      outline: none;
    }
  }

  .react-datepicker__header {
    background-color: ${STYLES.color.white};
    border: none;
  }

  .react-datepicker__month {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0;

    padding: 8px 0;
  }

  .react-datepicker__day {
    border-radius: 100px;
    transition: background-color 0.3s;
    &:hover {
      border-radius: 100px;
      background-color: ${STYLES.color.gray200};
    }
  }

  .react-datepicker__day-names {
    & > div {
      width: 40px;
      height: 40px;
      margin: 0;
      line-height: 40px;
    }
  }
  .react-datepicker__week {
    & > div {
      width: 40px;
      height: 40px;
      margin: 0;
      line-height: 40px;
    }
  }

  .react-datepicker__day--outside-month {
    color: transparent !important;
    pointer-events: none !important;
    background-color: transparent !important;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: transparent;
    border-radius: 100px;

    &:hover {
      background-color: ${STYLES.color.gray200};
    }
  }

  .react-datepicker__day--selected {
    background-color: ${STYLES.color.black};
    border-radius: 100px;

    &:hover {
      background-color: ${STYLES.color.black};
      border-radius: 100px;
    }
  }

  .react-datepicker__day--in-range {
    background-color: ${STYLES.color.gray100};
    color: ${STYLES.color.black};
    border-radius: 100px;
  }

  .react-datepicker__day--in-selecting-range {
    background-color: ${STYLES.color.gray100} !important;
    color: ${STYLES.color.black};
    border-radius: 100px;
  }

  .react-datepicker__day--selecting-range-start {
    background-color: ${STYLES.color.black} !important;
    color: ${STYLES.color.white};
  }
  .react-datepicker__day--selecting-range-end {
    background-color: ${STYLES.color.black} !important;
    color: ${STYLES.color.white};
  }

  .react-datepicker__day--range-start {
    background-color: ${STYLES.color.black} !important;
    color: ${STYLES.color.white};
  }
  .react-datepicker__day--range-end {
    background-color: ${STYLES.color.black} !important;
    color: ${STYLES.color.white};
  }
`;

export const DatePicker = styled(ReactDatePicker)``;
