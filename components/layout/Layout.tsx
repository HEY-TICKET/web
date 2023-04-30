'use client';

import { HTMLAttributes } from 'react';

import Footer from 'components/layout/Footer/Footer';
import * as Styles from 'components/layout/RootLayout.styles';
import GNB from 'features/index/GNB';

type LayoutProps = HTMLAttributes<HTMLDivElement>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Styles.Wrapper>
      <GNB />
      <Styles.Content>{children}</Styles.Content>
      <Footer />
    </Styles.Wrapper>
  );
};

export default Layout;
