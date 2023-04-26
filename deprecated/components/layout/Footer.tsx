'use client';

import * as Styles from 'deprecated/components/layout/RootLayout.styles';
import { CategoryIcon, HomeIcon, MyIcon } from 'deprecated/styles/icons';

interface FooterProps {
  pathname: string;
}

type FooterItem = {
  route: string;
  caption: string;
  Icon: JSX.Element;
};

// todo : pathname constant로 관리필요.
const FOOTER_ITEM_LIST: FooterItem[] = [
  { caption: '홈', route: '/', Icon: <HomeIcon size={24} /> },
  { caption: '카테고리', route: '/performance', Icon: <CategoryIcon size={24} /> },
  { caption: '마이', route: '/my', Icon: <MyIcon size={24} /> },
];

const Footer = ({ pathname }: FooterProps) => {
  return (
    <Styles.Footer>
      {FOOTER_ITEM_LIST.map(({ route, caption, Icon }) => (
        <Styles.FooterIcon key={route} href={{ pathname: route }} $active={pathname === route}>
          {Icon}
          <span>{caption}</span>
        </Styles.FooterIcon>
      ))}
    </Styles.Footer>
  );
};

export default Footer;
