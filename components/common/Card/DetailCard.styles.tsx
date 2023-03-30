'use client';

import styled, { css } from 'styled-components';

import { Badge } from 'components/common/Badge/Badge.styles';

export const PosterWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px;
`;

export const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

export const CardDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;

  ${({ theme }) =>
    css`
      color: ${theme.COLOR.gray500};
    `};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${Badge} {
    margin-bottom: 8px;
  }

  ${CardTitle} {
    margin-bottom: 4px;
  }

  ${CardDescription} {
    margin-bottom: 2px;
  }

  ${({ theme }) => css`
    ${theme.MEDIA.mobilePortrait} {
      flex-direction: row;
      gap: 12px;
      width: 100%;
      padding: 0 20px;
    }
  `}
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    ${theme.MEDIA.mobilePortrait} {
      justify-content: space-between;
    }
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 104px;
`;

export const PriceWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 22px;
    & > span {
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 13px;

      color: ${theme.COLOR.gray500};
    }

    & > p {
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;

      color: ${theme.COLOR.gray800};
    }
  `}

  ${({ theme }) => css`
    ${theme.MEDIA.mobilePortrait} {
      margin: 0;
    }
  `}
`;
