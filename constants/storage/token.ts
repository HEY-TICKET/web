'use client';

type TokenParams = { accessToken: string; refreshToken: string; grantType: string };

const defaultAuthValue = {
  accessToken: '',
};

export const tokenInfo = {
  name: 'tokenInfo',
  setItem: (value: Partial<TokenParams>, usePrevData?: boolean) => {
    if (typeof window !== 'undefined') {
      if (usePrevData) {
        const prevValue = tokenInfo.getItem();
        sessionStorage.setItem(tokenInfo.name, JSON.stringify({ ...prevValue, ...value }));
      } else {
        sessionStorage.setItem(tokenInfo.name, JSON.stringify(value));
      }
    }
  },
  getItem: (): Partial<TokenParams> => {
    if (typeof window !== 'undefined') {
      const item = sessionStorage.getItem(tokenInfo.name);
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
