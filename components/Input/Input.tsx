'use client';

import { InputHTMLAttributes } from 'react';

import {
  FieldValues,
  Path,
  SubmitErrorHandler,
  SubmitHandler,
  useFormContext,
} from 'react-hook-form';

import { SearchIcon } from 'styles/icons';

import * as Styles from './Input.styles';

interface InputProps<T extends FieldValues>
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'name' | 'hasIcon' | 'onValid' | 'onInvalid'
  > {
  name?: Path<T>;
  hasIcon?: boolean;
  onValid?: SubmitHandler<T>;
  onInvalid?: SubmitErrorHandler<T>;
}

const Input = <T extends FieldValues>({
  name,
  hasIcon = false,
  onValid,
  onInvalid,
  ...restProps
}: InputProps<T>) => {
  const methods = useFormContext<T>();

  if (name) {
    const { register, handleSubmit } = methods;
    return (
      <Styles.Form onSubmit={onValid && handleSubmit(onValid, onInvalid)}>
        <Styles.InputWrapper>
          {hasIcon && <SearchIcon size={20} />}
          <Styles.Input {...restProps} {...register(name)} />
        </Styles.InputWrapper>
      </Styles.Form>
    );
  } else {
    return (
      <Styles.Form>
        <Styles.InputWrapper>
          {hasIcon && <SearchIcon size={20} />}
          <Styles.Input {...restProps} />
        </Styles.InputWrapper>
      </Styles.Form>
    );
  }
};

export default Input;
