'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  width: 640px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 auto;
  position: relative; /* need this to position inner content */
  overflow-y: auto;
`;
