'use client';

import * as Styles from './Input.styles';
import { HTMLAttributes } from 'react';

import { SearchIcon } from 'styles/icons';

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
