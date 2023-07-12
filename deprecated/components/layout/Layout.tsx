'use client';

import { HTMLAttributes } from 'react';

import { usePathname } from 'next/navigation';

import GNB from 'features/index/GNB';

import Footer from './Footer/Footer';
import * as Styles from './RootLayout.styles';

type LayoutProps = HTMLAttributes<HTMLDivElement>;

const HEADER_EXCLUDE_PATH = ['/category/', '/search', '/auth', '/my/interest'];
const FOOTER_EXCLUDE_PATH = ['/auth', '/my/interest'];

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  // FIXME: exclude path return 함수 리팩토링 필요.
  const isHeaderExcludePath = () => {
    return HEADER_EXCLUDE_PATH.some((path) => pathname.startsWith(path));
  };

  // FIXME: exclude path return 함수 리팩토링 필요.
  const isFooterExcludePath = () => {
    return FOOTER_EXCLUDE_PATH.some((path) => pathname.startsWith(path));
  };

  return (
    <Styles.Wrapper>
      {!isHeaderExcludePath() && (
        <Styles.Header>
          <GNB />
        </Styles.Header>
      )}
      <Styles.Body>{children}</Styles.Body>
      {!isFooterExcludePath() && (
        <Styles.Footer>
          <Footer />
        </Styles.Footer>
      )}
    </Styles.Wrapper>
  );
};

export default Layout;
