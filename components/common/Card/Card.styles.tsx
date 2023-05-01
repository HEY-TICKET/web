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

export const SimpleInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 72px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 104px;
`;

export const PriceWrapper = styled.div`
  & > span {
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;

    color: ${STYLES.color.gray500};
  }

  & > p {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;

    color: ${STYLES.color.gray800};
  }
`;

export const RowDivStyle = css`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

export const BadgeStyle = css`
  width: 35px;
  height: 15px;
  border-radius: 4px;
`;
export const DateStyle = css`
  width: 87px;
  height: 15px;
  border-radius: 4px;
`;

/**
 * SimpleCardPoster Skeleton
 */

export const SimpleCardPosterStyle = css`
  width: 148px;
  height: 100%;
  border-radius: 6px;
  aspect-ratio: 1 / 1.414;

  margin-bottom: 14px;
`;

export const SimpleCardDescriptionStyle = css`
  width: 100%;
  height: 15px;
  border-radius: 4px;
  margin-bottom: 2px;
`;

export const SimpleCardTitleStyle = css`
  width: 100%;
  height: 20px;
  border-radius: 4px;
  margin-bottom: 2px;
`;

export const SimpleCardSecondLineTitleStyle = css`
  width: 80%;
  height: 20px;
  border-radius: 4px;
  margin-bottom: 2px;
`;

/**
 * DefaultCardPoster Skeleton
 */

export const DefaultCardPosterStyle = css`
  width: 195px;
  height: 280px;
  border-radius: 6px;
  aspect-ratio: 1 / 1.414;
  margin-bottom: 14px;
`;

export const DefaultBadgeStyle = css`
  width: 50px;
  height: 22px;
  margin-bottom: 8px;
  border-radius: 4px;
`;
export const DefaultTitleStyle = css`
  width: 100%;
  height: 20px;
  margin-bottom: 2px;
  border-radius: 4px;
`;

export const DefaultSecondLineTitleStyle = css`
  width: 60%;
  height: 20px;
  margin-bottom: 2px;
  border-radius: 4px;
`;
export const DefaultDescriptionStyle = css`
  width: 90%;
  height: 18px;
  border-radius: 4px;
  margin-bottom: 14px;
`;

export const DefaultPriceTitle = css`
  width: 28px;
  height: 14px;
  border-radius: 4px;
  margin-bottom: 2px;
`;
export const DefaultPrice = css`
  width: 100%;
  height: 18px;
  margin-bottom: 2px;
  border-radius: 4px;
`;
