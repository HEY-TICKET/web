'use client';

import { useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';

import List from 'components/common/List/List';
import { REGION } from 'constants/perform/region';

type Props = {
  name: string;
};

const Region = ({ name }: Props) => {
  const [activeList, setActiveList] = useState<string[]>([]);
  const { setValue, getValues } = useFormContext();

  const regionList = ['전체'].concat(Object.values(REGION));

  useEffect(() => {
    setActiveList(getValues(name) || []);
  }, [getValues, name]);

  const clickItem = (value: string) => {
    const prevValues = getValues(name);
    if (value === regionList[0]) {
      setValue(name, [value]);
      setActiveList([value]);
    } else {
      const filteredRegions = prevValues.filter((item: string) => item !== regionList[0]);
      if (prevValues.includes(value)) {
        setValue(
          name,
          filteredRegions.filter((item: string) => item !== value),
        );
        setActiveList(filteredRegions.filter((item: string) => item !== value));
      } else {
        setValue(name, [...filteredRegions, value]);
        setActiveList([...filteredRegions, value]);
      }
    }
  };

  return <List list={regionList} onClick={clickItem} activeList={activeList} />;
};

export default Region;
