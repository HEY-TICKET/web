'use client';

import { REGION } from 'constants/perform/region';
import List from 'components/common/List/List';
import { useState } from 'react';

const Region = () => {
  const regionList = ['전체'].concat(Object.values(REGION));

  const [selected, setSelected] = useState([regionList[0]]);

  const active = (value: string) => {
    return selected.includes(value);
  };

  const clickItem = (value: string) => {
    if (value === regionList[0]) {
      setSelected([value]);
    } else {
      setSelected((prev) => prev.filter((item) => item !== regionList[0]));
      if (selected.includes(value)) setSelected((prev) => prev.filter((item) => item !== value));
      else setSelected((prev) => [...prev, value]);
    }
  };

  return <List list={regionList} onClick={clickItem} active={active} />;
};

export default Region;
