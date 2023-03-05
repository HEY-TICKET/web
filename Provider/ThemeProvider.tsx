'use client';
import { ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

interface ThemeProviderProps {
  children: ReactElement;
}

const Provider = ({ children }: ThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
