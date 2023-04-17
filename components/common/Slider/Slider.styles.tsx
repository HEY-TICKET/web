'use client';

import styled, { css } from 'styled-components';

import STYLES from 'styles/index';

export const Wrapper = styled.div`
  overflow-x: auto;
  position: relative;
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 140px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 6px;

  border-radius: 50%;
  border: 1px solid ${STYLES.color.gray200};
  background-color: ${STYLES.color.white};
  & > svg {
    transform: rotate(-180deg);
  }

  z-index: 1;
`;
export const NextButton = styled.button`
  position: absolute;
  top: 140px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  padding: 6px;
  border-radius: 50%;
  border: 1px solid ${STYLES.color.gray200};
  background-color: ${STYLES.color.white};

  z-index: 1;
`;

export const ChildrenWrapper = styled.div<{ $clientX: number; $duration: number }>`
  display: flex;
  column-gap: 16px;
  padding: 16px;
  ${({ $clientX, $duration }) => css`
    transform: translateX(-${$clientX}px);
    transition: all ${$duration} ease-in-out;
  `}
`;
