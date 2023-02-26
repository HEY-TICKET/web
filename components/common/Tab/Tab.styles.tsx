'use client';

import styled, { css } from 'styled-components';

export const TabMenu = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const TabContents = styled.div<{ $active: boolean }>`
  display: ${({ $active }) => ($active ? 'block' : 'none')};
  flex: 1;
  height: 100%;
  overflow-y: auto;
`;

export const Dot = styled.div<{ $active: boolean }>`
  ${({ theme, $active }) => css`
    position: absolute;
    top: 0;
    right: -8px;

    display: ${$active ? 'block' : 'none'};
    width: 5px;
    height: 5px;
    border-radius: 100px;
    background-color: ${theme.COLOR.red};
  `}
`;

export const Tab = styled.div<{ $active: boolean }>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 8px;

  ${({ theme, $active }) => css`
    color: ${$active ? theme.COLOR.gray900 : theme.COLOR.gray350};
  `}

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  cursor: pointer;
`;

export const TabHeader = styled.div`
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  padding: 16px 20px;
  gap: 20px;

  background-color: ${({ theme }) => theme.COLOR.white};
`;
