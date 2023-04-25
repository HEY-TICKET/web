'use client';

import styled from 'styled-components';

import STYLES from 'deprecated/styles';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 360px;
  height: 600px;
`;
export const Header = styled.section`
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

export const ResetIconWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 68px;

  & > svg {
    ${STYLES.iconFilter.gray900};
  }
  & > span {
    color: ${STYLES.color.gray900};

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }

  &:disabled {
    & > svg {
      ${STYLES.iconFilter.gray350};
    }
    & > span {
      color: ${STYLES.color.gray350};
    }
  }

  cursor: pointer;
`;

export const Body = styled.section`
  height: 100%;
  overflow: hidden;
`;

export const Footer = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px 10px;

  height: 70px;
`;

export const TabHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
