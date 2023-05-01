'use client';

import styled, { css } from 'styled-components';

import STYLES from 'styles/index';

import { ColorTheme, Size } from './types';

const colorTheme = {
  dark: css`
    background-color: ${STYLES.color.gray870};
    color: ${STYLES.color.white};

    &:disabled {
      background-color: ${STYLES.color.gray300};
      &:hover {
        background-color: ${STYLES.color.gray300};
      }
    }

    &:hover {
      background-color: ${STYLES.color.gray850};
    }
  `,
  lightGray: css`
    background-color: ${STYLES.color.gray200};
    color: ${STYLES.color.gray650};

    &:disabled {
      background-color: ${STYLES.color.gray400};
    }

    &:hover {
      background-color: ${STYLES.color.white};
      border: 1px solid ${STYLES.color.gray250};
    }
  `,
  line: css`
    background-color: ${STYLES.color.white};
    color: ${STYLES.color.gray800};

    border: 1px solid ${STYLES.color.gray250};

    &:disabled {
      background-color: ${STYLES.color.gray400};
    }

    &:hover {
    }
  `,
};

const size = {
  sm: css`
    height: 38px;
    padding: 10px 16px;
    border-radius: 8px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  `,
  md: css`
    height: 42px;
    padding: 14px 16px;
    border-radius: 10px;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
  `,
  lg: css`
    height: 52px;
    padding: 16px;
    border-radius: 12px;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  `,
};

export const Button = styled.button<{
  $colorTheme: ColorTheme;
  $size: Size;
  $width?: number;
  $height?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  ${({ $colorTheme, $size, $width, $height }) => css`
    ${colorTheme[$colorTheme]};
    ${size[$size]};

    width: ${$width ? `${$width}px` : '100%'};
    height: ${$height && `${$height}px`};
  `}
`;
