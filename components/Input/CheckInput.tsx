'use client';

import { InputHTMLAttributes } from 'react';

import { FieldValues, Path, useFormContext } from 'react-hook-form';

import Checkbox from 'components/common/Checkbox/Checkbox';

interface CheckInputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  text: string | JSX.Element;
}

const CheckInput = <T extends FieldValues>({
  text,
  name,
  disabled,
  ...restProps
}: CheckInputProps<T>) => {
  const methods = useFormContext<T>();
  const { register } = methods;

  return (
    <Checkbox disabled={disabled} {...restProps} {...register(name)} text={text} type="checkbox" />
  );
};

export default CheckInput;
