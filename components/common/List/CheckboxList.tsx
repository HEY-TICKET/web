import { ChangeEvent, useState } from 'react';

import styled from 'styled-components';

import Checkbox from 'components/common/Checkbox/Checkbox';

interface CheckboxListProps {
  list: string[];
}

const CheckboxList = ({ list }: CheckboxListProps) => {
  const [checked, setChecked] = useState([list[0]]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) setChecked((prev) => [...prev, value]);
    else setChecked((prev) => prev.filter((item) => item !== value));
  };

  return (
    <Container>
      {list.map((name) => (
        <Item key={name}>
          <Checkbox
            type="checkbox"
            value={name}
            checked={checked.includes(name)}
            text={name}
            onChange={handleChange}
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

  border-bottom: 1px solid ${({ theme }) => theme.COLOR.gray200};

  &:hover {
    background-color: ${({ theme }) => theme.COLOR.gray100};
  }
`;
