import styled, { css } from 'styled-components';

export const ChipWrapper = styled.div<{ $active: boolean }>`
  ${({ theme, $active }) => css`
    display: flex;
    gap: 4px;
    padding: 6px 12px;
    background: ${$active ? theme.COLOR.gray850 : theme.COLOR.white};

    border: 1px solid ${theme.COLOR.gray200};
    border-radius: 16px;

    & > svg {
      ${theme.ICON_FILTER.gray500};
    }
  `}
  cursor:pointer;
`;

export const Chip = styled.div<{ $active: boolean }>`
  ${({ theme, $active }) => css`
    color: ${$active ? theme.COLOR.white : theme.COLOR.gray500};
  `}
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
`;
