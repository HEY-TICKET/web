'use client';

import List from 'components/common/List/List';
import { REGION } from 'constants/perform/region';

type Props = {
  name: string;
};

const Region = ({ name }: Props) => {
  const regionList = ['전체'].concat(Object.values(REGION));

  return <List list={regionList} name={name} isAllValue />;
};

export default Region;
