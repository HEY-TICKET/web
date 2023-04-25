'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';

import STYLES from 'deprecated/styles/index';

export const Layout = styled.div`
  // 모바일 기준
  max-width: 640px;
  height: 100vh;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  bottom: 0;
  width: 640px;
  background-color: ${STYLES.color.white};
  z-index: 1;

  height: 60px;
  border-top: 1px solid ${STYLES.color.gray200};
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

  ${({ $active }) => css`
    span {
      color: ${$active ? STYLES.color.gray900 : STYLES.color.gray400};
    }
    svg {
      ${$active ? STYLES.iconFilter.gray900 : STYLES.iconFilter.gray400};
    }
  `}
`;
