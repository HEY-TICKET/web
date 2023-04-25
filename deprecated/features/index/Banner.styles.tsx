'use client';

import styled from 'styled-components';

import Button from 'deprecated/components/common/Button/Button';
import STYLES from 'deprecated/styles/index';

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 16px;
  background-color: ${STYLES.color.gray150};
  border-radius: 16px;
`;

export const DescriptionWrapper = styled.div`
  align-items: center;

  & > p {
    color: ${STYLES.color.gray500};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
  & > p > strong {
    color: ${STYLES.color.gray700};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
`;

export const LinkButton = styled(Button)`
  width: fit-content;
  border-radius: 100px;
`;
