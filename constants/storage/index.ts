'use client';

import { SignUpParams } from 'apis/members/type';

const defaultAuthValue: SignUpParams = {
  email: '',
  password: '',
  genres: [],
  areas: [],
  keywords: [],
};

export const authInfo = {
  name: 'authInfo',
  setItem: (value: Partial<SignUpParams>, usePrevData?: boolean) => {
    if (typeof window !== 'undefined') {
      if (usePrevData) {
        const prevValue = authInfo.getItem();
        sessionStorage.setItem(authInfo.name, JSON.stringify({ ...prevValue, ...value }));
      } else {
        sessionStorage.setItem(authInfo.name, JSON.stringify(value));
      }
    }
  },
  getItem: (): Partial<SignUpParams> => {
    if (typeof window !== 'undefined') {
      const item = sessionStorage.getItem(authInfo.name);
      if (item) {
        return JSON.parse(item);
      } else {
        return defaultAuthValue;
      }
    } else {
      return defaultAuthValue;
    }
  },
};
