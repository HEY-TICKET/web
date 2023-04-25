'use client';

import styled, { css } from 'styled-components';

import STYLES from 'deprecated/styles';
import { COLOR } from 'deprecated/styles/colors';

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

  ${({ $colorTheme }) => {
    switch ($colorTheme) {
      case 'gray400': {
        return css`
          color: ${STYLES.color.white};
          background-color: ${STYLES.color[$colorTheme]};
        `;
      }
      case 'blue25': {
        return css`
          color: ${STYLES.color.blue50};
          background-color: ${STYLES.color[$colorTheme]};
        `;
      }
      case 'green25': {
        return css`
          color: ${STYLES.color.green50};
          background-color: ${STYLES.color[$colorTheme]};
        `;
      }
      default:
        return css``;
    }
  }}
`;
