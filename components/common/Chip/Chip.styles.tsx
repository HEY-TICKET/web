import styled, { css } from 'styled-components';

export const ChipWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 4px;
    padding: 6px 12px;
    background: ${theme.COLOR.white};

    border: 1px solid ${theme.COLOR.gray200};
    border-radius: 16px;

    & > svg {
      ${theme.ICON_FILTER.gray500};
    }
  `}
  cursor:pointer;
`;

export const Chip = styled.div`
  ${({ theme }) => css`
    color: ${theme.COLOR.gray500};
  `}
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
`;
export const CloseIcon = styled.div``;
