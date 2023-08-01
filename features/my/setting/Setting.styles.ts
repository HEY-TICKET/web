import styled, { css } from 'styled-components';

import STYLES from 'styles/index';

export const ListWrapper = styled.div<{ cursor?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 16px;

  ${({ cursor }) =>
    cursor &&
    css`
      &:hover {
        background-color: ${STYLES.color.gray100};
        cursor: pointer;
      }
    `}
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const Title = styled.span`
  color: ${STYLES.color.gray500};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ContentTitle = styled(Title)`
  color: ${STYLES.color.gray900};
`;

export const Description = styled.span<{ underline?: boolean }>`
  color: ${STYLES.color.gray400};

  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: ${STYLES.color.gray500};
      }
    `}
`;

export const Divider = styled.hr`
  width: 100%;
  border: 1px solid ${STYLES.color.gray200};
  border-bottom: 0;
  margin: 12px 0;
`;
