'use client';

import styled from 'styled-components';

import STYLES from 'styles/index';

export const Container = styled.div`
  padding-bottom: 60px;
`;

export const CardWrapper = styled.div``;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px 16px;
  background-color: ${STYLES.color.gray150};
`;

export const InfoWrapper = styled.div`
  padding: 20px;
  background-color: ${STYLES.color.white};
`;

export const InfoTitle = styled.div`
  color: ${STYLES.color.gray900};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;

export const FooterWrapper = styled.div`
  position: sticky;
  bottom: 0;
  background-color: ${STYLES.color.white};
  z-index: 1;
`;
