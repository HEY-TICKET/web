'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useLayoutContext } from 'components/layout/_context/LayoutContext';
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
    </Styles.MyContainer>
  );
};

export default My;
