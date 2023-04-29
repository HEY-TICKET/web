import styled, { css } from 'styled-components';

import STYLES from 'styles/index';

export const ChipWrapper = styled.div<{ $active: boolean }>`
  ${({ $active }) => css`
    display: flex;
    gap: 4px;
    padding: 6px 12px;
    background: ${$active ? STYLES.color.gray850 : STYLES.color.white};

    border: 1px solid ${STYLES.color.gray200};
    border-radius: 16px;
  `}
  cursor:pointer;
`;

export const CloseIconWrapper = styled.div<{ $active: boolean }>`
  z-index: 1;
  display: flex;
  align-items: center;

  ${({ $active }) => css`
    & > svg {
      ${$active ? STYLES.iconFilter.white : STYLES.iconFilter.gray500};
    }
  `}
`;

export const Chip = styled.div<{ $active: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  white-space: nowrap;

  ${({ $active }) => css`
    color: ${$active ? STYLES.color.white : STYLES.color.gray500};
  `}
`;
