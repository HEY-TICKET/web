'use client';

import styled, { css } from 'styled-components';

import { ColorTheme, Size } from './types';

const colorTheme = {
  dark: css`
    ${({ theme }) => css`
      background-color: ${theme.COLOR.gray870};
      color: ${theme.COLOR.white};

      &:disabled {
        background-color: ${theme.COLOR.gray350};
      }

      &:hover {
        background-color: ${theme.COLOR.gray850};
      }
    `}
  `,
  lightGray: css`
    ${({ theme }) => css`
      background-color: ${theme.COLOR.gray200};
      color: ${theme.COLOR.gray650};

      &:disabled {
        background-color: ${theme.COLOR.gray400};
      }

      &:hover {
        background-color: ${theme.COLOR.white};
        border: 1px solid ${theme.COLOR.gray250};
      }
    `}
  `,
  line: css`
    ${({ theme }) => css`
      background-color: ${theme.COLOR.white};
      color: ${theme.COLOR.gray800};

      border: 1px solid ${theme.COLOR.gray250};

      &:disabled {
        background-color: ${theme.COLOR.gray400};
      }

      &:hover {
      }
    `}
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
