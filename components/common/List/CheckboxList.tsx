import { ChangeEvent, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import Checkbox from 'components/common/Checkbox/Checkbox';
import STYLES from 'styles/index';
import { CommonItem } from 'types/common';

interface CheckboxListProps<T> {
  list: CommonItem<T>[];
  name?: string;
}

const CheckboxList = <T extends string>({ list, name }: CheckboxListProps<T>) => {
  const [checked, setChecked] = useState<T[]>([list[0].value]);
  const useHook = !!name;
  const { register } = useFormContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) setChecked((prev) => [...prev, value as T]);
    else setChecked((prev) => prev.filter((item) => item !== value));
  };

  return (
    <Container>
      {list.map(({ caption, value }) => (
        <Item key={value}>
          <Checkbox
            type="checkbox"
            value={value}
            text={caption}
            {...(useHook && register(name))}
            {...(!useHook && {
              checked: checked.includes(value),
              onChange: handleChange,
            })}
          />
        </Item>
      ))}
    </Container>
  );
};

export default CheckboxList;

const Container = styled.ul`
  padding: 0 20px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  height: 56px;

  padding: 18px 2px;

  border-bottom: 1px solid ${STYLES.color.gray200};

  &:hover {
    background-color: ${STYLES.color.gray100};
  }
`;
