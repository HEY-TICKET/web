'use client';

import { PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import Footer from 'components/layout/_components/Footer';
import GNB from 'components/layout/_components/GNB';
import LayoutContext from 'components/layout/_context/LayoutContext';
import { authInfo } from 'constants/storage';
import { tokenInfo } from 'constants/storage/token';
import usePopup from 'hooks/usePopup';
import { useMemberRefreshToken } from 'reactQuery/members/mutation';

// const ONE_MINUTE = 1000 * 60;
//
// const JWT_EXPIRY_TIME = ONE_MINUTE * 5; // 5분

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const { mutateAsync: getNewToken } = useMemberRefreshToken();

  const [hasGNB, setHasGNB] = useState(true);
  const [hasFooter, setHasFooter] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(!!tokenInfo.getItem().accessToken);

  const setGNB = (has: boolean) => setHasGNB(has);
  const setFooter = (has: boolean) => setHasFooter(has);

  const { Popup, open: openPopup } = usePopup({
    title: '로그아웃 하시겠어요?',
    submitText: '로그아웃',
    onSubmit: async () => {
      await authInfo.setItem({});
      await tokenInfo.setItem({});
      setIsLoggedIn(false);
    },
  });

  const logout = openPopup;

  const login = () => setIsLoggedIn(true);

  const checkLogin = useCallback(async () => {
    try {
      const { email } = authInfo.getItem();
      const { refreshToken } = tokenInfo.getItem();

      if (!!email && !!refreshToken) {
        const res = await getNewToken({ email, refreshToken });
        console.log(res);
        tokenInfo.setItem({ accessToken: res.accessToken, refreshToken: res.refreshToken }, true);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (err) {
      setIsLoggedIn(false);
      console.error(err);
    }
  }, [getNewToken]);

  useEffect(() => {
    const { accessToken } = tokenInfo.getItem();
    if (accessToken) {
      if (isLoggedIn) checkLogin().then();
    }
  }, [checkLogin, isLoggedIn, pathname]);

  useEffect(() => {
    if (pathname === '/' || pathname === '/category' || pathname === '/my') {
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
