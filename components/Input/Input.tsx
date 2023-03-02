'use client';

import { FocusEvent, InputHTMLAttributes } from 'react';

import {
  DeepPartial,
  FieldValues,
  FormProvider,
  Path,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

import { SearchIcon } from 'styles/icons';
import { nullFn } from 'utils/function';

import * as Styles from './Input.styles';

interface InputProps<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'onSubmit'> {
  name: Path<T>;
  onSubmit?: SubmitHandler<T>;
  hasIcon?: boolean;
  defaultValues?: DeepPartial<T>;
}

const Input = <T extends FieldValues>({
  name,
  onSubmit = nullFn,
  hasIcon = false,
  defaultValues,
  onBlur,
  ...restProps
}: InputProps<T>) => {
  const methods = useForm<T>({ mode: 'onTouched', defaultValues });
  const { register, handleSubmit } = methods;
  const { onBlur: _onBlur, onChange: _onChange, ...restRegister } = register(name);

  const handleBlur = async (e: FocusEvent<HTMLInputElement>) => {
    onBlur?.(e);
    await _onBlur(e);
  };

  return (
    <FormProvider {...methods}>
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        <Styles.InputWrapper>
          {hasIcon && <SearchIcon size={20} />}
          <Styles.Input {...restProps} {...restRegister} onChange={_onChange} onBlur={handleBlur} />
        </Styles.InputWrapper>
      </Styles.Form>
    </FormProvider>
  );
};

export default Input;
