import Link from 'next/link';

import Logo from 'components/common/Logo/Logo';
import { ROUTES } from 'constants/routes';
import * as Styles from 'features/index/GNB.styles';
import { BellIcon, SearchIcon } from 'styles/icons';

const GNB = () => {
  return (
    <Styles.GNBWrapper>
      <Logo />
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
