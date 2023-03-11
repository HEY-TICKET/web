'use client';

import styled, { css } from 'styled-components';

export const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px 12px;

  width: fit-content;

  ${({ theme }) => css`
    ${theme.MEDIA.mobilePortrait} {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;
