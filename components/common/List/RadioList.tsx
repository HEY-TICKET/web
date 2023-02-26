import { ChangeEvent, useState } from 'react';

import styled from 'styled-components';

import Radio from 'components/common/Radio/Radio';

interface CheckboxListProps {
  list: string[];
  name: string;
}

const RadioList = ({ list, name }: CheckboxListProps) => {
  const [checked, setChecked] = useState(list[0]);

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
            checked={value === checked}
            value={value}
            name={name}
            onChange={handleChange}
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

  border-bottom: 1px solid ${({ theme }) => theme.COLOR.gray200};

  &:hover {
    background-color: ${({ theme }) => theme.COLOR.gray100};
  }
`;
