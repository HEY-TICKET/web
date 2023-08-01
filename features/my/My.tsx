'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useLayoutContext } from 'components/layout/_context/LayoutContext';
import { ROUTES } from 'constants/routes';
import * as Styles from 'features/my/My.styles';

const My = () => {
  const { replace } = useRouter();

  const { isLoggedIn, logout } = useLayoutContext();

  useEffect(() => {
    console.log('auth sign in logged in', isLoggedIn);
    if (!isLoggedIn) replace('/auth/signIn?from=/my');
  }, [isLoggedIn, replace]);

  return (
    <Styles.MyContainer>
      <div>
        <button onClick={logout}>로그아웃</button>
      </div>
      <Link href={ROUTES.account}>
        <button>계정관리</button>
      </Link>
    </Styles.MyContainer>
  );
};

export default My;
