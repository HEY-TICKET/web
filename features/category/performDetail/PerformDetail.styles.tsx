'use client';

import styled, { css } from 'styled-components';

export const GenreHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding: 14px 16px;
`;

export const LeftIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 30px;
  left: 16px;
  & > svg {
    rotate: 180deg;
  }

  cursor: pointer;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  ${({ theme }) => css`
    ${theme.COLOR.gray900};
  `}
`;

export const CardWrapper = styled.div``;
