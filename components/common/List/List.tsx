'use client';

import styled from 'styled-components';

import { CheckIcon } from 'styles/icons';

type ListProps = {
  list: string[];
  onClick: (value: string) => void;
  activeList: string[];
};

const List = ({ list, onClick, activeList }: ListProps) => {
  return (
    <Container>
      {list.map((value: string) => (
        <Item key={value} onClick={() => onClick(value)} $active={activeList.includes(value)}>
          <span>{value}</span>
          <CheckIcon size={24} />
        </Item>
      ))}
    </Container>
  );
};

export default List;

const Container = styled.ul`
  padding: 0 20px;
  overflow-y: auto;
`;

const Item = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 44px;

  border-bottom: 1px solid ${({ theme }) => theme.COLOR.gray200};
  &:hover {
    background-color: ${({ theme }) => theme.COLOR.gray100};
    & > span {
      color: ${({ theme, $active }) => ($active ? theme.COLOR.gray750 : theme.COLOR.gray600)};
    }
  }

  & > span {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: ${({ theme, $active }) => ($active ? theme.COLOR.gray750 : theme.COLOR.gray400)};
  }

  & > svg {
    display: ${({ $active }) => ($active ? 'block' : 'none')};
  }

  cursor: pointer;
`;
