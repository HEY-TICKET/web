'use client';

import { HTMLAttributes } from 'react';

import { useParams, usePathname } from 'next/navigation';

import Footer from 'components/layout/Footer/Footer';
import * as Styles from 'components/layout/RootLayout.styles';
import GNB from 'features/index/GNB';

type LayoutProps = HTMLAttributes<HTMLDivElement>;

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const params = useParams();

  // FIXME: exclude path return 함수 리팩토링 필요.
  const isHeaderExcludePath = () => {
    if (pathname.startsWith('/category')) {
      return !!params.genre;
    }

    return pathname.startsWith('/search') || pathname.startsWith('/signIn');
  };

  // FIXME: exclude path return 함수 리팩토링 필요.
  const isFooterExcludePath = () => {
    return pathname.startsWith('/signIn');
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
