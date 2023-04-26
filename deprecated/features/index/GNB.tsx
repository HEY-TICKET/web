import Link from 'next/link';

import { ROUTES } from 'deprecated/constants/routes';
import * as Styles from 'deprecated/features/index/GNB.styles';
import { BellIcon, SearchIcon } from 'deprecated/styles/icons';

const GNB = () => {
  return (
    <Styles.GNBWrapper>
      <Styles.Logo>HEY TICKET</Styles.Logo>
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
