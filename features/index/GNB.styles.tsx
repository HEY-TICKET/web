'use client';

import styled from 'styled-components';

import STYLES from 'styles/index';

export const GNBWrapper = styled.div`
  display: flex;
  min-height: 56px;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Logo = styled.div`
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
