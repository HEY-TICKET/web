'use client';

import { HTMLAttributes } from 'react';

import styled, { keyframes } from 'styled-components';

type SkeletonProps = HTMLAttributes<HTMLElement>;

const Skeleton = ({ children, ...restProps }: SkeletonProps) => {
  return <Container {...restProps}>{children}</Container>;
};

export default Skeleton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;
type RowDivProps = HTMLAttributes<HTMLDivElement>;

Skeleton.FlexBox = ({ children, ...restProps }: RowDivProps) => {
  return <Box {...restProps}>{children}</Box>;
};

type BlockProps = HTMLAttributes<HTMLDivElement>;

Skeleton.Block = ({ children, ...restProps }: BlockProps) => {
  return <Block {...restProps}>{children}</Block>;
};

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Block = styled.div`
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-repeat: no-repeat;
`;
