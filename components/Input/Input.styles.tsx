'use client';

import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.MEDIA.mobile} {
      display: flex;
      gap: 8px;
      align-items: center;

      height: 44px;
      border-radius: 8px;
      padding: 12px;

      background-color: ${theme.COLOR.gray150};
      & > svg {
        width: 20px;
        height: 20px;
        color: ${theme.COLOR.gray350};
      }
    }
    & > svg {
      ${theme.ICON_FILTER.gray350};
    }
  `}
`;

export const Input = styled.input`
  outline: none;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  ${({ theme }) => css`
    ${theme.MEDIA.mobile} {
      width: 100%;
      background-color: ${theme.COLOR.gray150};
      &::placeholder {
        color: ${theme.COLOR.gray350};
      }
    }
  `}
`;
