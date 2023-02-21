'use client';

import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 360px;
  height: 600px;
`;
export const Header = styled.section`
  ${({ theme }) => css`
    ${theme.MEDIA.mobile} {
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
    }
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.MEDIA.mobile} {
      cursor: pointer;
      & > svg {
        ${theme.ICON_FILTER.gray500};
      }
    }
  `}
`;

export const Body = styled.section`
  flex: 1;
`;
export const Footer = styled.section`
  height: 70px;
`;
