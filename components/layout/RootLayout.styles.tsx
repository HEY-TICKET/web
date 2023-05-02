'use client';

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: block;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  display: block;
`;
