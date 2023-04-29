'use client';

import styled from 'styled-components';

import { Badge } from 'components/common/Badge/Badge.styles';
import STYLES from 'styles/index';
import { textOverflowEllipsis } from 'utils/common';

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

  ${textOverflowEllipsis({ lineCount: 2 })};
`;

export const CardDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;

  color: ${STYLES.color.gray500};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

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
  padding: 0 16px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 104px;
`;
