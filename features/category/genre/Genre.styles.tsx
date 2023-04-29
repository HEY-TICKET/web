import styled from 'styled-components';

import STYLES from 'styles/index';

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 100vh;
`;

export const StickyBox = styled.div`
  position: sticky;
  top: 0;
  background-color: ${STYLES.color.white};
  z-index: 1;
`;

export const GenreContents = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

export const GenreHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding: 14px 16px;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  ${STYLES.color.gray900};
`;

export const LeftIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 30px;
  left: 16px;
  & > svg {
    rotate: 180deg;
  }

  cursor: pointer;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;

  height: 48px;
  padding: 12px 16px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
  overflow-x: auto;

  ${STYLES.utils.hiddenScroll}
`;

export const FilterIconWrapper = styled.div`
  margin-left: 12px;
  cursor: pointer;
`;

export const SubFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 40px;
  padding: 8px 10px;
  margin-bottom: 16px;

  color: ${STYLES.color.gray900};
`;

export const SortIconWrapper = styled.button`
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
`;

export const CardListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Trigger = styled.div`
  height: 10px;
`;
