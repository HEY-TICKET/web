'use client';

import { HTMLAttributes } from 'react';

import { FieldValues, Path, useFormContext } from 'react-hook-form';

import * as Styles from 'components/Input/New/Input.styles';

interface NewInputProps<T extends FieldValues> extends HTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  labelText?: string;
}

const Input = <T extends FieldValues>({ labelText, name, ...restProps }: NewInputProps<T>) => {
  const methods = useFormContext<T>();
  const {
    register,
    formState: { errors },
  } = methods;

  const error = errors[name];

  return (
    <Styles.Container>
      <Styles.InputWrapper error={!!error}>
        <Styles.Label>
          {labelText && <Styles.LabelText>{labelText}</Styles.LabelText>}
          <input type="text" {...restProps} {...register(name)} />
        </Styles.Label>
      </Styles.InputWrapper>
      <Styles.ErrorMessage>{error?.message?.toString()}</Styles.ErrorMessage>
    </Styles.Container>
  );
};

export default Input;
