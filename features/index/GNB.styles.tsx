'use client';

import Link from 'next/link';
import styled from 'styled-components';

import STYLES from 'styles/index';

export const GNBWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  width: 640px;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin: auto;

  background-color: ${STYLES.color.white};
  z-index: ${STYLES.zIndex.navigation};
`;

export const Logo = styled(Link)`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 130%;
  color: ${STYLES.color.gray800};
`;

export const ContentsWrapper = styled.div`
  display: flex;
  column-gap: 16px;
`;
