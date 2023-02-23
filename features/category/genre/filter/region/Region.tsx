'use client';

import { REGION } from 'constants/perform/region';
import List from 'components/common/List/List';

const Region = () => {
  const regionList = ['전체'].concat(Object.values(REGION));

  return <List list={regionList} />;
};

export default Region;
