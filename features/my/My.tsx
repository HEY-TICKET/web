'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useLayoutContext } from 'components/layout/_context/LayoutContext';
import * as Styles from 'features/my/My.styles';

const My = () => {
  const { push } = useRouter();

  const { isLoggedIn, logout } = useLayoutContext();

  useEffect(() => {
    if (!isLoggedIn) push('/auth/signIn');
  }, [isLoggedIn, push]);

  return (
    <Styles.MyContainer>
      <div>
        <button onClick={logout}>로그아웃</button>
      </div>
    </Styles.MyContainer>
  );
};

export default My;
