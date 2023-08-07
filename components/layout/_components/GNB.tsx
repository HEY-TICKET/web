'use client';

import Link from 'next/link';
import styled from 'styled-components';

import Logo from 'components/common/Logo/Logo';
import { ROUTES } from 'constants/routes';
import { BellIcon, SearchIcon, SettingIcon } from 'styles/icons';
import STYLES from 'styles/index';

const GNB = () => {
  return (
    <Wrapper>
      <Logo />
      <Contents>
        <Link href={ROUTES.search}>
          <SearchIcon size={28} />
        </Link>
        <Link href={ROUTES.notification}>
          <BellIcon size={28} />
        </Link>
        <Link href={ROUTES.service}>
          <SettingIcon />
        </Link>
      </Contents>
    </Wrapper>
  );
};

export default GNB;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  width: 100%;
  max-width: 640px;
  height: 56px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin: auto;

  background-color: ${STYLES.color.white};
  z-index: ${STYLES.zIndex.navigation};
`;

const Contents = styled.div`
  display: flex;
  column-gap: 16px;
`;
