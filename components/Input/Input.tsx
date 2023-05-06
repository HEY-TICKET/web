'use client';

import { InputHTMLAttributes } from 'react';

import { FieldValues, Path } from 'react-hook-form';
import { css } from 'styled-components';

import InputComponents from 'components/Input/InputComponents';

interface InputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  label?: string;
}

const Input = <T extends FieldValues>({ label, name, disabled, ...restProps }: InputProps<T>) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <InputComponents<T> name={name} disabled={disabled}>
        <InputComponents.Label text={label}>
          <InputComponents.Input<T> name={name} disabled={disabled} {...restProps} />
        </InputComponents.Label>
      </InputComponents>
      <InputComponents.ErrorMessage<T> name={name} disabled={disabled} />
    </div>
  );
};

export default Input;
