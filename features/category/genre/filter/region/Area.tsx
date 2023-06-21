'use client';

import List from 'components/common/List/List';
import { AREA_LIST_MAP } from 'constants/performance/common';

type Props = {
  name: string;
};

const Area = ({ name }: Props) => {
  return <List list={AREA_LIST_MAP} name={name} isAllValue />;
};

export default Area;
