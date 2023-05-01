'use client';

import styled, { css } from 'styled-components';

import STYLES from 'styles/index';

export const CategoryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 56px 0 60px;
`;

export const Category = styled.ul`
  display: flex;
  gap: 20px;
  padding: 16px;
`;
export const CategoryItem = styled.li<{ $active?: boolean }>`
  cursor: pointer;
  ${({ $active }) => css`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: ${$active ? STYLES.color.gray900 : STYLES.color.gray350};
  `}
`;

export const SubCategory = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SubCategoryItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12.5px 16px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: ${STYLES.color.gray900};

  &:hover {
    background-color: ${STYLES.color.gray100};
  }
`;

export const SubCategoryItem = styled.li`
  display: flex;
  gap: 4px;

  & > span {
    color: ${STYLES.color.gray900};
  }
  & > p {
    color: ${STYLES.color.gray400};
  }
`;
