'use client';

import Image from 'next/image';
import styled, { css } from 'styled-components';

import { Badge } from 'components/common/Badge/Badge.styles';

export const CardImage = styled(Image)`
  border-radius: 4px;
  margin-bottom: 14px;

  ${({ theme }) => css`
    ${theme.MEDIA.mobilePortrait} {
      width: 108px;
      height: 152px;
      margin: 0;
    }
  `}
`;

export const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
`;

export const CardDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  ${({ theme }) =>
    css`
      color: ${theme.COLOR.gray500};
    `};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 195px;

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
