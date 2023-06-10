'use client';

import List from 'components/common/List/List';
import { REGION_MAP } from 'constants/perform/region';

type Props = {
  name: string;
};

const Region = ({ name }: Props) => {
  const regionList = [{ caption: '전체', value: 'ALL' }].concat(REGION_MAP);

  return <List list={regionList} name={name} isAllValue />;
};

export default Region;
