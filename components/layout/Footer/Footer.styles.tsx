'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';

import STYLES from 'styles/index';

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;

  flex: 0 0 auto;

  width: 100%;
  background-color: ${STYLES.color.white};

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
