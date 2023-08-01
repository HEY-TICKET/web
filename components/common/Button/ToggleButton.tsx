'use client';

import { HTMLAttributes, useState } from 'react';

import styled, { css, keyframes } from 'styled-components';

import STYLES from 'styles/index';

interface ToggleButtonProps extends HTMLAttributes<HTMLElement> {
  active: boolean;
}

const ACTIVE_COLOR = '#202429';
const INACTIVE_COLOR = '#E4E6E9';

const ToggleButton = ({ active = false }: ToggleButtonProps) => {
  const [act, setAct] = useState(active);

  const clickButton = () => {
    setAct((prev) => !prev);
  };

  return (
    <Wrapper onClick={clickButton} active={act}>
      <CircleWrapper>
        <Circle />
      </CircleWrapper>
    </Wrapper>
  );
};

export default ToggleButton;

const Wrapper = styled.div<{ active: boolean }>`
  display: flex;

  width: 48px;
  padding: 2px;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color ease-in-out 0.3s;

  ${({ active }) =>
    active
      ? css`
          background-color: ${ACTIVE_COLOR};
          ${CircleWrapper} {
            animation: ${activeFrames} 0.3s forwards ease-in-out;
          }
        `
      : css`
          background-color: ${INACTIVE_COLOR};
          ${CircleWrapper} {
            animation: ${inactiveFrames} 0.3s forwards ease-in-out;
          }
        `}
`;

const CircleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${STYLES.color.white};
  border-radius: 100px;
`;

const activeFrames = keyframes`
  0% {flex: 0;}
  100% {flex:1;}
`;

const inactiveFrames = keyframes`
  0% {flex: 1;}
  100% {flex:0;}
`;
