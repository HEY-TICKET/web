import React, { Children, HTMLAttributes, ReactNode, useState } from 'react';

import * as Styles from './Tab.styles';

type TabProps = HTMLAttributes<HTMLDivElement>;
type TabContentsProp = HTMLAttributes<HTMLDivElement>;
type TabProp = HTMLAttributes<HTMLDivElement>;

const useTab = (clickTab?: () => void) => {
  const [activeNum, setActiveNum] = useState(0);

  const handleClickTab = (index: number) => {
    setActiveNum(index);
    clickTab?.();
  };

  const TabMenu = ({ children }: TabProps) => {
    return <Styles.TabMenu>{children}</Styles.TabMenu>;
  };

  const TabContents = ({ children }: TabContentsProp) => {
    return (
      <>
        {Children.map(children, (child, index) => {
          return <Styles.TabContents $active={activeNum === index}>{child}</Styles.TabContents>;
        })}
      </>
    );
  };

  const Tab = ({ children }: TabProp) => {
    return (
      <Styles.TabHeader>
        {Children.map<ReactNode, ReactNode>(children, (child, index): ReactNode => {
          return (
            <Styles.Tab onClick={() => handleClickTab(index)} $active={activeNum === index}>
              <Styles.Dot $active={activeNum === index} />
              {child}
            </Styles.Tab>
          );
        })}
      </Styles.TabHeader>
    );
  };

  TabMenu.Contents = TabContents;
  TabMenu.Tab = Tab;

  return { TabMenu, setActiveNum };
};

export default useTab;
