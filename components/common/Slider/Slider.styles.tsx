'use client';

import styled from 'styled-components';

import STYLES from 'styles/index';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const PrevButton = styled.button<{ $clickable: boolean }>`
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 6px;

  filter: drop-shadow(0px 0px 4.57143px rgba(0, 0, 0, 0.2));

  border-radius: 50%;
  background-color: ${STYLES.color.white};

  visibility: ${({ $clickable }) => ($clickable ? 'visible' : 'hidden')};
  pointer-events: ${({ $clickable }) => ($clickable ? 'unset' : 'none')};

  & > svg {
    transform: rotate(-180deg);
  }

  z-index: 1;
`;
export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  padding: 6px;
  border-radius: 50%;
  filter: drop-shadow(0px 0px 4.57143px rgba(0, 0, 0, 0.2));

  background-color: ${STYLES.color.white};

  z-index: 1;
`;

export const ContentsWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Contents = styled.ul<{
  $clientX: number;
  $duration: number;
}>`
  display: flex;
  column-gap: 16px;
  padding: 16px;
  transform: translateX(${({ $clientX }) => -$clientX}px);
  transition-property: all;
  transition-duration: ${({ $duration }) => $duration}ms;
  transition-timing-function: ease-in-out;
`;

export const Item = styled.li`
  position: relative;
  display: inline-block;
`;
