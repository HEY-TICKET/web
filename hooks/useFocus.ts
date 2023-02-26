'use client';

import { useEffect, useRef, useState } from 'react';

type OnFocus = () => void;
type OnBlur = () => void;

const useFocus = <T extends HTMLElement>(onFocus?: OnFocus, onBlur?: OnBlur) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    const handleFocus = () => {
      setIsFocused(true);
      onFocus?.();
    };
    const handleBlur = () => {
      setIsFocused(false);
      onBlur?.();
    };

    element?.addEventListener('focus', handleFocus);
    element?.addEventListener('blur', handleBlur);

    return () => {
      element?.removeEventListener('focus', handleFocus);
      element?.removeEventListener('blur', handleBlur);
    };
  }, [onBlur, onFocus]);

  return { ref, isFocused };
};

export default useFocus;
