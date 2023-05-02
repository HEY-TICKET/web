'use client';

import { InputHTMLAttributes } from 'react';

import { FieldValues, Path, useFormContext } from 'react-hook-form';

import * as Styles from 'components/Input/New/Input.styles';

interface NewInputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  labelText?: string;
}

const Input = <T extends FieldValues>({
  labelText,
  name,
  disabled,
  ...restProps
}: NewInputProps<T>) => {
  const methods = useFormContext<T>();
  const {
    register,
    formState: { errors },
  } = methods;

  const error = errors[name];

  return (
    <Styles.Container>
      <Styles.InputWrapper error={!!error} disabled={!!disabled}>
        <Styles.Label>
          {labelText && <Styles.LabelText>{labelText}</Styles.LabelText>}
          <input type="text" disabled={disabled} {...restProps} {...register(name)} />
        </Styles.Label>
      </Styles.InputWrapper>
      {!disabled && error && (
        <Styles.ErrorMessage>{error?.message?.toString()}</Styles.ErrorMessage>
      )}
    </Styles.Container>
  );
};

export default Input;
