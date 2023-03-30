'use client';

import styled, { css } from 'styled-components';

import { COLOR } from 'styles/colors';

export const Badge = styled.div<{ $colorTheme: keyof typeof COLOR }>`
  display: flex;
  align-items: center;

  width: fit-content;
  height: 22px;

  padding: 4px 8px;
  border-radius: 4px;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  ${({ theme, $colorTheme }) => {
    switch ($colorTheme) {
      case 'gray400': {
        return css`
          color: ${theme.COLOR.white};
          background-color: ${theme.COLOR[$colorTheme]};
        `;
      }
      case 'blue25': {
        return css`
          color: ${theme.COLOR.blue50};
          background-color: ${theme.COLOR[$colorTheme]};
        `;
      }
      case 'green25': {
        return css`
          color: ${theme.COLOR.green50};
          background-color: ${theme.COLOR[$colorTheme]};
        `;
      }
      default:
        return css``;
    }
  }}
`;
