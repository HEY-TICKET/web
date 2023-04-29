'use client';

import styled from 'styled-components';

import STYLES from 'styles/index';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 360px;
  height: 328px;
`;
export const Header = styled.section`
  height: 62px;
  display: flex;
  justify-content: space-between;
  padding: 24px 20px 12px;

  & > span {
    color: ${STYLES.color.gray900};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
  }
`;

export const CloseIconWrapper = styled.div`
  cursor: pointer;
  & > svg {
    ${STYLES.iconFilter.gray500};
  }
`;

export const Body = styled.section`
  height: 100%;
  overflow-y: auto;
`;

export const Footer = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px 10px;

  height: 68px;
`;
