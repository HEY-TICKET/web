'use client';

import styled, { css } from 'styled-components';

import { Badge } from 'components/common/Badge/Badge.styles';
import STYLES from 'styles/index';
import { textOverflowEllipsis } from 'utils/common';

export const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  ${textOverflowEllipsis({ lineCount: 2 })};
`;

export const PerformanceDate = styled.span<{ $isRunning: boolean }>`
  display: flex;
  column-gap: 4px;

  & > span {
    color: ${({ $isRunning }) => ($isRunning ? STYLES.color.green50 : STYLES.color.blue50)};

    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const CardDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  ${textOverflowEllipsis({ lineCount: 1 })};

  color: ${STYLES.color.gray500};
`;

export const SimpleCardDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  ${textOverflowEllipsis({ lineCount: 1 })};

  color: ${STYLES.color.gray500};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
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
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 104px;
`;

export const PriceWrapper = styled.div`
  ${({ theme }) => css`
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
`;
