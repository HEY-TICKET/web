import { ChangeEvent, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import Radio from 'components/common/Radio/Radio';
import STYLES from 'styles/index';

interface CheckboxListProps<T> {
  list: { caption: string; value: T }[];
  name: string;
  useForm?: boolean;
}

const RadioList = <T,>({ list, name, useForm = false }: CheckboxListProps<T>) => {
  const [checked, setChecked] = useState(JSON.stringify(list[0].value));

  const useHook = !!name && useForm;

  const { register } = useFormContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) setChecked(value);
  };

  return (
    <Container>
      {list.map(({ caption, value }) => (
        <Item key={JSON.stringify(value)}>
          <Radio
            label={caption}
            value={JSON.stringify(value)}
            name={name}
            {...(useHook && register(name))}
            {...(!useHook && {
              checked: value === checked,
              onChange: handleChange,
            })}
          />
        </Item>
      ))}
    </Container>
  );
};

export default RadioList;

const Container = styled.ul``;

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
