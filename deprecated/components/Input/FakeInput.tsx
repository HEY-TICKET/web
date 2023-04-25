'use client';

import { InputHTMLAttributes } from 'react';

import * as Styles from 'deprecated/components/Input/Input.styles';
import { SearchIcon } from 'deprecated/styles/icons';

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'name' | 'hasIcon' | 'onValid' | 'onInvalid'
  > {
  hasIcon?: boolean;
}
const FakeInput = ({ hasIcon = false, ...restProps }: Props) => {
  return (
    <Styles.InputWrapper>
      {hasIcon && <SearchIcon size={20} />}
      <Styles.Input {...restProps} readOnly />
    </Styles.InputWrapper>
  );
};

export default FakeInput;
