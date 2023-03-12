'use client';

import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 16px;
`;

export const CategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const Category = styled.ul`
  display: flex;
  gap: 20px;
  padding: 16px;
`;
export const CategoryItem = styled.li<{ $active?: boolean }>`
  cursor: pointer;
  ${({ theme, $active }) => css`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: ${$active ? theme.COLOR.gray900 : theme.COLOR.gray350};
  `}
`;

export const SubCategory = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SubCategoryItemWrapper = styled.div`
  cursor: pointer;
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12.5px 16px;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    color: ${theme.COLOR.gray900};

    &:hover {
      background-color: ${theme.COLOR.gray100};
    }
  `}
`;

export const SubCategoryItem = styled.li`
  ${({ theme }) => css`
    display: flex;
    gap: 4px;

    & > span {
      color: ${theme.COLOR.gray900};
    }
    & > p {
      color: ${theme.COLOR.gray400};
    }
  `}
`;
