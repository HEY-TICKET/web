'use client';

import { HTMLAttributes } from 'react';

import { usePathname } from 'next/navigation';

import Footer from 'components/layout/Footer/Footer';
import * as Styles from 'components/layout/RootLayout.styles';
import GNB from 'features/index/GNB';

type LayoutProps = HTMLAttributes<HTMLDivElement>;

const HEADER_EXCLUDE_PATH = ['/category/', '/search', '/auth', '/my/interest'];
const FOOTER_EXCLUDE_PATH = ['/auth', '/my/interest'];

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  // FIXME: exclude path return 함수 리팩토링 필요.
  const isHeaderExcludePath = () => {
    return HEADER_EXCLUDE_PATH.some((path) => path === pathname);
  };

  // FIXME: exclude path return 함수 리팩토링 필요.
  const isFooterExcludePath = () => {
    return FOOTER_EXCLUDE_PATH.some((path) => path === pathname);
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
