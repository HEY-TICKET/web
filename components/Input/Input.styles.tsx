'use client';

import styled, { css } from 'styled-components';

import STYLES from 'styles/index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div<{ error: boolean; disabled: boolean }>`
  display: block;
  width: 100%;
  padding: 8px 16px;
  border-radius: 12px;
  border: 2px solid ${STYLES.color.gray400};
  
  
  ${({ error, disabled }) =>
    css`
      &:focus-within {
        border-color: ${error ? STYLES.color.red : STYLES.color.gray700};
      }
      border-color: ${disabled
        ? STYLES.color.gray200
        : error
        ? STYLES.color.red
        : STYLES.color.gray400};

      background-color: ${disabled ? STYLES.color.gray150 : STYLES.color.white};
    `}}
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  height: 100%;
`;

export const LabelText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

export const DefaultMessage = styled.span`
  margin-top: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${STYLES.color.gray500};
`;
export const ErrorMessage = styled(DefaultMessage)`
  color: ${STYLES.color.red};
`;

export const Input = styled.input`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  height: 24px;

  &::placeholder {
    color: ${STYLES.color.gray300};

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }
`;
