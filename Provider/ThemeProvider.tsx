'use client';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

interface ThemeProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
