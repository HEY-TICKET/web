'use client';

import styled from 'styled-components';

import STYLES from 'styles/index';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  align-items: center;

  height: 44px;
  border-radius: 8px;
  padding: 12px;

  background-color: ${STYLES.color.gray150};
  & > svg {
    width: 20px;
    height: 20px;
    ${STYLES.iconFilter.gray350};
  }
`;

export const Input = styled.input`
  outline: none;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  width: 100%;
  background-color: ${STYLES.color.gray150};
  &::placeholder {
    color: ${STYLES.color.gray350};
  }
`;
