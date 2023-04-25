import { ChangeEvent, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import Checkbox from 'deprecated/components/common/Checkbox/Checkbox';
import STYLES from 'deprecated/styles';

interface CheckboxListProps {
  list: string[];
  name?: string;
}

const CheckboxList = ({ list, name }: CheckboxListProps) => {
  const [checked, setChecked] = useState([list[0]]);
  const useHook = !!name;
  const { register } = useFormContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) setChecked((prev) => [...prev, value]);
    else setChecked((prev) => prev.filter((item) => item !== value));
  };

  return (
    <Container>
      {list.map((value) => (
        <Item key={value}>
          <Checkbox
            type="checkbox"
            value={value}
            text={value}
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
