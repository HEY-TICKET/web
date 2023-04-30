'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 100vh;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 auto;
  position: relative; /* need this to position inner content */
  overflow-y: auto;
`;
