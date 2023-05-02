'use client';

import { ButtonHTMLAttributes } from 'react';

import styled, { css } from 'styled-components';

import STYLES from 'styles/index';

type Theme = 'none' | 'dark' | 'white';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Theme;
  size?: Size;
}

const Button = ({ children, theme = 'dark', size = 'md', css, ...restProps }: ButtonProps) => {
  return (
    <StyledButton $theme={theme} $size={size} css={css} {...restProps}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ $theme: Theme; $size: Size }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 42px;

  padding: 14px 16px;
  margin: 0;
  border-radius: 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  ${({ $theme, $size }) => css`
    ${theme[$theme]}
    ${size[$size]}
  `}
`;

const theme = {
  none: css``,
  dark: css`
    color: ${STYLES.color.white};
    background-color: ${STYLES.color.gray800};

    &:active {
      background-color: ${STYLES.color.gray900};
    }
    &:hover {
      background-color: ${STYLES.color.gray850};
    }
    &:disabled {
      background-color: ${STYLES.color.gray300} !important;
    }
  `,
  white: css`
    border: 1px solid ${STYLES.color.gray250};
    color: ${STYLES.color.gray800};
    background-color: ${STYLES.color.white};

    &:disabled {
      color: ${STYLES.color.gray400};
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
