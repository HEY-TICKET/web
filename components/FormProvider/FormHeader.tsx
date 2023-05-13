'use client';

import { HTMLAttributes } from 'react';

import styled from 'styled-components';

import STYLES from 'styles/index';

type FormHeaderProps = HTMLAttributes<HTMLElement>;

const FormHeader = ({ children, ...restProps }: FormHeaderProps) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

export default FormHeader;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 4px;
`;

const Title = styled.span`
  text-align: center;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

FormHeader.Title = Title;

const Description = styled.p`
  color: ${STYLES.color.gray500};
  text-align: center;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

FormHeader.Description = Description;
