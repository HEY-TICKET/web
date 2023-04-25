'use client';

import { REGION } from 'constants/perform/region';
import List from 'deprecated/components/common/List/List';

type Props = {
  name: string;
};

const Region = ({ name }: Props) => {
  const regionList = ['전체'].concat(Object.values(REGION));

  return <List list={regionList} name={name} isAllValue />;
};

export default Region;
