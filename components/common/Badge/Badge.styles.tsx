'use client';

import styled, { css } from 'styled-components';

export const Badge = styled.div<{ $colorTheme: 'green' | 'blue' }>`
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

  ${({ theme, $colorTheme }) => css`
    color: ${theme.COLOR[`${$colorTheme}50`]};
    background-color: ${theme.COLOR[`${$colorTheme}25`]};
  `}
`;
