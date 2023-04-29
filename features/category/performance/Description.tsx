'use client';

import { HTMLAttributes } from 'react';

import styled from 'styled-components';

import STYLES from 'styles/index';

interface DescriptionProps extends HTMLAttributes<HTMLElement> {
  desc?: string;
}

const Description = ({ desc = '정보 없음', children, ...rest }: DescriptionProps) => {
  if (typeof children === 'string')
    return <Text {...rest}>{children.trim() ? children : desc}</Text>;

  return <Text {...rest}>{children}</Text>;
};

export default Description;

const Text = styled.p`
  color: ${STYLES.color.gray900};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
