'use client';

import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 640px;
  height: 56px;
  padding: 14px 16px;
  margin: auto;

  & > button > svg {
    transform: rotate(-180deg);
    cursor: pointer;
  }
`;
