'use client';

import { HTMLAttributes } from 'react';

import { SearchIcon } from 'styles/icons';

import * as Styles from './Input.styles';

type InputProps = HTMLAttributes<HTMLInputElement>;

const Input = ({ ...restProps }: InputProps) => {
  return (
    <Styles.InputWrapper>
      <SearchIcon size={20} />
      <Styles.Input {...restProps} />
    </Styles.InputWrapper>
  );
};

export default Input;
