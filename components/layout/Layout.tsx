'use client';

import { HTMLAttributes } from 'react';

import Footer from 'components/layout/Footer/Footer';
import * as Styles from 'components/layout/RootLayout.styles';
import GNB from 'features/index/GNB';

type LayoutProps = HTMLAttributes<HTMLDivElement>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Header>
        <GNB />
      </Styles.Header>
      <Styles.Body>{children}</Styles.Body>
      <Styles.Footer>
        <Footer />
      </Styles.Footer>
    </Styles.Wrapper>
  );
};

export default Layout;
