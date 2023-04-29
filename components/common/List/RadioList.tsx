import { ChangeEvent, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import Radio from 'components/common/Radio/Radio';
import STYLES from 'styles/index';

interface CheckboxListProps {
  list: string[];
  name: string;
  useForm?: boolean;
}

const RadioList = ({ list, name, useForm = false }: CheckboxListProps) => {
  const [checked, setChecked] = useState(list[0]);

  const useHook = !!name && useForm;

  const { register } = useFormContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) setChecked(value);
  };

  return (
    <Container>
      {list.map((value) => (
        <Item key={value}>
          <Radio
            label={value}
            value={value}
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
