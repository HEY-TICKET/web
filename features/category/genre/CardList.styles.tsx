'use client';

import styled from 'styled-components';

export const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px 12px;

  width: fit-content;

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
