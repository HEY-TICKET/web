'use client';

import styled from 'styled-components';

import STYLES from 'styles/index';

export const CurateSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${STYLES.color.white};
`;

export const InfoTitle = styled.div`
  color: ${STYLES.color.gray900};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

export const ReadMoreButton = styled.div`
  display: flex;
  align-items: center;
`;

export const ChipContainer = styled.div`
  display: flex;
  column-gap: 8px;
  padding: 8px 16px;
`;
