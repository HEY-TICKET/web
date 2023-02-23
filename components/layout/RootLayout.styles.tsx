'use client';

import Link from 'next/link';

import styled, { css } from 'styled-components';

export const Layout = styled.div`
  // 모바일 기준
  width: 640px;
  height: 100vh;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: absolute;
  bottom: 0;
  width: 100%;

  height: 60px;
  ${({ theme }) => css`
    border-top: 1px solid ${theme.COLOR.gray200};
  `}
`;

export const FooterIcon = styled(Link)<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2px;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
  }

  cursor: pointer;

  ${({ $active, theme }) => css`
    span {
      color: ${$active ? theme.COLOR.gray900 : theme.COLOR.gray400};
    }
    svg {
      ${$active ? theme.ICON_FILTER.gray900 : theme.ICON_FILTER.gray400};
    }
  `}
`;
