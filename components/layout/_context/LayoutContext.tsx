'use client';

import { createContext, PropsWithChildren, useContext } from 'react';

import { nullFn } from 'utils/function';

type ContextProps = {
  isLoggedIn: boolean;
  logout: () => void;
  login: () => void;
  setGNB: (has: boolean) => void;
  setFooter: (has: boolean) => void;
};

type LayoutContextProps = PropsWithChildren<ContextProps>;

const Context = createContext<ContextProps>({
  isLoggedIn: false,
  login: nullFn,
  logout: nullFn,
  setGNB: nullFn,
  setFooter: nullFn,
});

const LayoutContext = ({ children, ...restProps }: LayoutContextProps) => {
  return <Context.Provider value={restProps}>{children}</Context.Provider>;
};

export default LayoutContext;

export const useLayoutContext = () => {
  return useContext(Context);
};
