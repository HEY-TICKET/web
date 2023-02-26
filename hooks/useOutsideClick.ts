'use client';

import { useCallback, useEffect, useRef } from 'react';

interface useOutsideClickProps {
  onClick: () => void;
}

const useOutsideClick = <T extends HTMLElement>({ onClick }: useOutsideClickProps) => {
  const ref = useRef<T>(null);

  const handleClick = useCallback(
    (event: Event) => {
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        onClick();
      }
    },
    [onClick, ref],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  return ref;
};

export default useOutsideClick;
