'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 16px;
`;

export const BackIconWrapper = styled.div`
  & > svg {
    rotate: 180deg;
    cursor: pointer;
  }
`;

export const RecentSearchesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 16px;
`;

export const SearchesTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => css`
    & > span {
      color: ${theme.COLOR.gray900};
    }
    & > div {
      display: flex;
      align-items: center;

      & > span {
        color: ${theme.COLOR.gray400};
        cursor: pointer;

        &:not(:last-child)::after {
          display: inline-block;
          content: '';
          width: 1px;
          height: 12px;
          margin: 0 12px;
          background-color: ${theme.COLOR.gray400};
        }
      }
    }
  `}
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const SearchesChips = styled.div`
  display: flex;
  gap: 8px;

  overflow-x: auto;
  ${({ theme }) =>
    css`
      ${theme.UTILS.hiddenScroll}
    `}
`;

export const SearchContents = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;
export const NoResultWrapper = styled.div`
  height: 100%;
  position: relative;
`;

export const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 20%;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ theme }) => css`
    h5 {
      margin-bottom: 12px;

      text-align: center;

      font-style: normal;
      font-weight: 600;
      font-size: 18px;

      color: ${theme.COLOR.gray700};
    }
    span {
      margin-bottom: 32px;

      text-align: center;
      white-space: pre-wrap;

      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      color: ${theme.COLOR.gray400};
    }
  `}
`;
