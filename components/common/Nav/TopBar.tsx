'use client';

import { HTMLAttributes, PropsWithChildren } from 'react';

import styled from 'styled-components';

import { ArrowRight } from 'styles/icons';
import STYLES from 'styles/index';

interface TopBarProps extends HTMLAttributes<HTMLElement> {
  leftProps?: JSX.Element;
  middleProps?: JSX.Element;
  rightProps?: JSX.Element;
}

const TopBar = ({ leftProps, middleProps, rightProps }: TopBarProps) => {
  return (
    <Header>
      <Section>{leftProps}</Section>
      <Section>{middleProps}</Section>
      <Section>{rightProps}</Section>
    </Header>
  );
};

export default TopBar;

type BackButtonProps = {
  onClick: () => void;
};

TopBar.BackButton = function BackButton({ onClick }: BackButtonProps) {
  return (
    <StyledBackButton type={'button'} onClick={onClick}>
      <ArrowRight size={28} />
    </StyledBackButton>
  );
};

TopBar.Title = function Title({ children }: PropsWithChildren) {
  return <StyledTitle>{children}</StyledTitle>;
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  width: 640px;
  height: 56px;
  padding: 14px 16px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const StyledBackButton = styled.button`
  svg {
    transform: rotate(-180deg);
    cursor: pointer;
  }
`;

const StyledTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  ${STYLES.color.gray900};
`;
