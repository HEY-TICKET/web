'use client';

import { InputHTMLAttributes, useEffect, useRef } from 'react';

import { FieldValues, Path, useFormContext } from 'react-hook-form';

import { SearchIcon } from 'deprecated/styles/icons';

import * as Styles from './Input.styles';

interface InputProps<T extends FieldValues>
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'name' | 'hasIcon' | 'onValid' | 'onInvalid'
  > {
  name?: Path<T>;
  hasIcon?: boolean;
  autoBlur?: boolean;
}

const Input = <T extends FieldValues>({
  name,
  hasIcon = false,
  autoBlur = false,
  ...restProps
}: InputProps<T>) => {
  const methods = useFormContext<T>();
  const useHookForm = !!name && !!methods;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const renderInput = () => {
    if (useHookForm) {
      const { register } = methods;
      const { ref, ...rest } = register(name);
      return (
        <Styles.Input
          {...restProps}
          {...rest}
          ref={(e: HTMLInputElement) => {
            ref(e);
            inputRef.current = e; // you can still assign to ref
          }}
        />
      );
    } else {
      return <Styles.Input {...restProps} />;
    }
  };

  useEffect(() => {
    if (useHookForm) {
      const {
        formState: { isSubmitting },
      } = methods;
      const element = inputRef.current;
      if (isSubmitting && autoBlur && element) {
        element.blur();
      }
    }
  }, [autoBlur, methods, useHookForm]);

  return (
    <Styles.InputWrapper>
      {hasIcon && <SearchIcon size={20} />}
      {renderInput()}
    </Styles.InputWrapper>
  );
};

export default Input;
