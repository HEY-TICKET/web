import { usePathname } from 'next/navigation';

import * as Styles from 'components/layout/Footer/Footer.styles';
import { CategoryIcon, HomeIcon, MyIcon } from 'styles/icons';

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
  console.log(pathname);

  return (
    <Styles.Footer>
      {FOOTER_ITEM_LIST.map(({ route, caption, Icon }) => {
        const isActive = route === '/' ? pathname === route : pathname.startsWith(route);
        return (
          <Styles.FooterIcon key={route} href={{ pathname: route }} $active={isActive}>
            {Icon}
            <span>{caption}</span>
          </Styles.FooterIcon>
        );
      })}
    </Styles.Footer>
  );
};

export default Footer;
