'use client';

import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 360px;
  height: 600px;

  ${({ theme }) => css`
    ${theme.MEDIA.mobilePortrait} {
      width: 100vw;
      height: 80vh;
    }
  `}
`;
export const Header = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 24px 20px 12px;

    & > span {
      color: ${theme.COLOR.gray900};
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
    }
  `}
`;

export const CloseIconWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    & > svg {
      ${theme.ICON_FILTER.gray500};
    }
  `}
`;

export const ResetIconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    min-width: 68px;

    & > svg {
      ${theme.ICON_FILTER.gray900};
    }
    & > span {
      color: ${theme.COLOR.gray900};

      font-style: normal;
      font-weight: 600;
      font-size: 16px;
    }

    &:disabled {
      & > svg {
        ${theme.ICON_FILTER.gray350};
      }
      & > span {
        color: ${theme.COLOR.gray350};
      }
    }

    cursor: pointer;
  `}
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
