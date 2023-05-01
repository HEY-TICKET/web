'use client';

import styled, { css } from 'styled-components';

import STYLES from 'styles/index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const InputWrapper = styled.div<{ error: boolean }>`
  display: block;
  width: 100%;
  padding: 8px 16px;
  border-radius: 12px;
  border: 2px solid ${STYLES.color.gray400};

  &:focus-within {
      border-color: ${STYLES.color.gray700};
  }
  ${({ error }) =>
    error &&
    css`
      border-color: ${STYLES.color.red};
    `}}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  height: 100%;

  & > input {
    height: 24px;
  }
`;

export const LabelText = styled.span``;

export const ErrorMessage = styled.span`
  color: ${STYLES.color.red};
`;
