import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { ROUTES } from 'constants/routes';
import * as Styles from 'features/index/GNB.styles';
import { BellIcon, SearchIcon } from 'styles/icons';

const GNB = () => {
  const pathname = usePathname();
  const params = useParams();

  // FIXME: exclude path return 함수 리팩토링 필요.
  const isExcludePath = (pathname: string) => {
    if (pathname.startsWith('/category')) {
      return !!params.genre;
    }

    return pathname.startsWith('/search');
  };

  if (isExcludePath(pathname)) return <></>;

  return (
    <Styles.GNBWrapper>
      <Styles.Logo href={'/'}>HEY TICKET</Styles.Logo>
      <Styles.ContentsWrapper>
        <Link href={`${ROUTES.search}`}>
          <SearchIcon size={28} />
        </Link>
        <BellIcon size={28} />
      </Styles.ContentsWrapper>
    </Styles.GNBWrapper>
  );
};

export default GNB;
