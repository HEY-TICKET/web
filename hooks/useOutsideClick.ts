'use client';

import { useCallback, useEffect, useRef } from 'react';

type useOutsideClickProps = {
  outsideClick?: () => void;
  insideClick?: () => void;
};

const useOutsideClick = <T extends HTMLElement>({
  outsideClick,
  insideClick,
}: useOutsideClickProps) => {
  const ref = useRef<T>(null);

  const handleClick = useCallback(
    (event: Event) => {
      if (ref.current && !ref.current?.contains(event.target as Node)) {
        outsideClick?.();
      } else {
        insideClick?.();
      }
    },
    [insideClick, outsideClick],
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  return ref;
};

export default useOutsideClick;
