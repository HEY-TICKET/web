'use client';

import styled from 'styled-components';

export const CurateSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLOR.white};
`;

export const InfoTitle = styled.div`
  color: ${({ theme }) => theme.COLOR.gray900};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
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

export const CardContainer = styled.div`
  display: flex;
  column-gap: 16px;
  padding: 16px;
  overflow-x: scroll;
`;
