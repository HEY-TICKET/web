'use client';

import { HTMLAttributes } from 'react';

import * as Styles from 'components/layout/RootLayout.styles';

type LayoutProps = HTMLAttributes<HTMLDivElement>;

const Layout = ({ children }: LayoutProps) => {
  return <Styles.Layout>{children}</Styles.Layout>;
};

export default Layout;
