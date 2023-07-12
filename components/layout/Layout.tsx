'use client';

import { PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Cookies from 'universal-cookie';

import Footer from 'components/layout/_components/Footer';
import GNB from 'components/layout/_components/GNB';
import LayoutContext from 'components/layout/_context/LayoutContext';
import { REFRESH_TOKEN } from 'constants/auth';
import { authInfo } from 'constants/storage';
import usePopup from 'hooks/usePopup';
import { useMemberRefreshToken } from 'reactQuery/members/mutation';

// const ONE_MINUTE = 1000 * 60;
//
// const JWT_EXPIRY_TIME = ONE_MINUTE * 5; // 5분

const cookies = new Cookies();

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const { mutateAsync: getNewToken } = useMemberRefreshToken();

  const [hasGNB, setHasGNB] = useState(true);
  const [hasFooter, setHasFooter] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setGNB = (has: boolean) => setHasGNB(has);
  const setFooter = (has: boolean) => setHasFooter(has);

  const { Popup, open: openPopup } = usePopup({
    title: '로그아웃 하시겠어요?',
    submitText: '로그아웃',
    onSubmit: () => {
      cookies.remove(REFRESH_TOKEN);
      setIsLoggedIn(false);
    },
  });

  const logout = openPopup;

  const login = () => setIsLoggedIn(true);

  const checkLogin = useCallback(async () => {
    try {
      const refreshToken = cookies.get(REFRESH_TOKEN);
      const { email } = authInfo.getItem();

      if (!!email && !!refreshToken) {
        const res = await getNewToken({ email, refreshToken });
        cookies.set(REFRESH_TOKEN, res.refreshToken, { path: '/', sameSite: 'strict' });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (err) {
      // cookies.remove(REFRESH_TOKEN);
      setIsLoggedIn(false);
      console.error(err);
    }
  }, [getNewToken]);

  useEffect(() => {
    if (isLoggedIn) checkLogin().then();
  }, [checkLogin, isLoggedIn]);

  useEffect(() => {
    if (pathname === '/' || pathname === '/category') {
      setGNB(true);
      setFooter(true);
    } else {
      setGNB(false);
      setFooter(false);
    }
  }, [pathname]);

  const contextProps = {
    setGNB,
    setFooter,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <LayoutContext {...contextProps}>
      {hasGNB && <GNB />}
      <Body>{children}</Body>
      {hasFooter && <Footer />}
      <Popup />
    </LayoutContext>
  );
};

export default Layout;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;
