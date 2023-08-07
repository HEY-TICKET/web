'use client';

import { HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes } from 'react';

import { FieldValues, Path, useFormContext } from 'react-hook-form';

import * as Styles from 'components/Input/Input.styles';

/**
 * 컨테이너 컴포넌트
 */
interface ContainerProps<T extends FieldValues> extends HTMLAttributes<HTMLDivElement> {
  name: Path<T>;
  disabled: boolean | undefined;
}

const Container = <T extends FieldValues>({
  name,
  disabled,
  children,
  ...props
}: ContainerProps<T>) => {
  const methods = useFormContext<T>();
  const {
    formState: { errors },
  } = methods;

  const error = errors[name];

  return (
    <Styles.Container {...props}>
      <Styles.InputWrapper error={!!error} disabled={!!disabled}>
        {children}
      </Styles.InputWrapper>
    </Styles.Container>
  );
};

export default Container;

interface InputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
}

const Input = <T extends FieldValues>({ name, disabled, ...restProps }: InputProps<T>) => {
  const methods = useFormContext<T>();
  const { register } = methods;

  return <Styles.Input type="text" disabled={disabled} {...restProps} {...register(name)} />;
};

Container.Input = Input;

/**
 * 라벨 컴포넌트
 */
type LabelType = LabelHTMLAttributes<HTMLLabelElement> & {
  text?: string;
};

const Label = ({ text, children, ...restProps }: LabelType) => {
  return (
    <Styles.Label>
      {text && <Styles.LabelText {...restProps}>{text}</Styles.LabelText>}
      {children}
    </Styles.Label>
  );
};

Container.Label = Label;

/**
 * 에러메시지 컴포넌트
 */
interface ErrorMessageProps<T extends FieldValues> extends HTMLAttributes<HTMLDivElement> {
  name: Path<T>;
  disabled: boolean | undefined;
  message?: string;
}

const ErrorMessage = <T extends FieldValues>({ name, disabled, message }: ErrorMessageProps<T>) => {
  const methods = useFormContext<T>();
  const {
    formState: { errors },
  } = methods;

  const error = errors[name];

  if (disabled || !error) {
    return message ? <Styles.DefaultMessage>{message}</Styles.DefaultMessage> : <></>;
  }
  return <Styles.ErrorMessage>{error?.message?.toString()}</Styles.ErrorMessage>;
};

Container.ErrorMessage = ErrorMessage;
