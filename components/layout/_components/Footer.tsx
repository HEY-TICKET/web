'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled, { css } from 'styled-components';

import { CategoryIcon, HomeIcon, MyIcon } from 'styles/icons';
import STYLES from 'styles/index';

type FooterItem = {
  route: string;
  caption: string;
  Icon: JSX.Element;
};

// todo : pathname constant로 관리필요.
const FOOTER_ITEM_LIST: FooterItem[] = [
  { caption: '홈', route: '/', Icon: <HomeIcon size={24} /> },
  { caption: '카테고리', route: '/category', Icon: <CategoryIcon size={24} /> },
  { caption: '마이', route: '/my', Icon: <MyIcon size={24} /> },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <Wrapper>
      {FOOTER_ITEM_LIST.map(({ route, caption, Icon }) => {
        const isActive = route === '/' ? pathname === route : pathname.startsWith(route);
        return (
          <FooterIcon key={route} href={{ pathname: route }} $active={isActive}>
            {Icon}
            <span>{caption}</span>
          </FooterIcon>
        );
      })}
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  flex: 0 0 auto;

  width: 100%;
  max-width: 640px;
  height: 60px;
  margin: auto;
  border-top: 1px solid ${STYLES.color.gray200};
  background-color: ${STYLES.color.white};
  z-index: ${STYLES.zIndex.navigation};
`;

const FooterIcon = styled(Link)<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2px;

  span {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
  }

  cursor: pointer;

  ${({ $active }) => css`
    span {
      color: ${$active ? STYLES.color.gray900 : STYLES.color.gray400};
    }
    svg {
      ${$active ? STYLES.iconFilter.gray900 : STYLES.iconFilter.gray400};
    }
  `}
`;
