import React, { ReactNode, useState } from 'react';

import styled, { css } from 'styled-components';

interface UseTabProps {
  tabIndex?: number;
  tabList: { title: string; component: ReactNode }[];
}

const Tab = ({ tabIndex = 0, tabList }: UseTabProps) => {
  const [current, setCurrent] = useState(tabIndex);

  return (
    <Wrapper>
      <Header>
        {tabList.map(({ title }, index) => (
          <TabName key={index} onClick={() => setCurrent(index)} $active={current === index}>
            <Dot $active={current === index} />
            {title}
          </TabName>
        ))}
      </Header>
      <Body>{tabList[current].component}</Body>
    </Wrapper>
  );
};

export default Tab;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;
const Header = styled.ul`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  gap: 20px;

  background-color: ${({ theme }) => theme.COLOR.white};
`;
const Body = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
`;

const TabName = styled.li<{ $active: boolean }>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 8px;

  ${({ theme, $active }) => css`
    color: ${$active ? theme.COLOR.gray900 : theme.COLOR.gray350};
  `}

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  cursor: pointer;
`;

const Dot = styled.div<{ $active: boolean }>`
  ${({ theme, $active }) => css`
    position: absolute;
    top: 0;
    right: -8px;

    display: ${$active ? 'block' : 'none'};
    width: 5px;
    height: 5px;
    border-radius: 100px;
    background-color: ${theme.COLOR.red};
  `}
`;
