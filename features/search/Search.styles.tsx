'use client';

import styled from 'styled-components';

import STYLES from 'styles/index';

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  padding-bottom: calc(60px + 22px);
`;
export const StickyBox = styled.div`
  position: sticky;
  top: 0;
  background-color: ${STYLES.color.white};
  z-index: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 16px;
`;

export const CategoryWrapper = styled.div``;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  padding: 16px;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  color: ${({ $active }) => ($active ? STYLES.color.gray900 : STYLES.color.gray350)};
`;

export const SearchResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
`;

export const SearchResult = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const SortIconWrapper = styled.button`
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`;

export const BackIconWrapper = styled.div`
  & > svg {
    rotate: 180deg;
    cursor: pointer;
    ${STYLES.iconFilter.gray700};
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

  & > span {
    color: ${STYLES.color.gray900};
  }
  & > div {
    display: flex;
    align-items: center;

    & > span {
      color: ${STYLES.color.gray400};
      cursor: pointer;

      &:not(:last-child)::after {
        display: inline-block;
        content: '';
        width: 1px;
        height: 12px;
        margin: 0 12px;
        background-color: ${STYLES.color.gray400};
      }
    }
  }
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const SearchesChips = styled.div`
  display: flex;
  gap: 8px;

  overflow-x: auto;
  ${STYLES.utils.hiddenScroll}
`;

export const SearchContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;
`;
export const NoResultWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    margin-bottom: 12px;

    text-align: center;

    font-style: normal;
    font-weight: 600;
    font-size: 18px;

    color: ${STYLES.color.gray700};
  }
  span {
    margin-bottom: 32px;

    text-align: center;
    white-space: pre-wrap;

    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: ${STYLES.color.gray400};
  }
`;
