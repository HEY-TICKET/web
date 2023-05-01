'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type SignInFormValues = {
  email: string;
};

const SignInFormProvider = ({ children }: FormProviderProps) => {
  const methods = useForm<SignInFormValues>({
    mode: 'onTouched',
    defaultValues: { email: '' },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const onValidSubmit: SubmitHandler<SignInFormValues> = (data) => {
    const { email } = data;
    console.log(email);
  };

  return (
    <FormProvider {...methods}>
      <Form id={'signInForm'} onSubmit={handleSubmit(onValidSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default SignInFormProvider;

const Form = styled.form`
  width: 100%;
`;

const schema = yup
  .object({
    email: yup
      .string()
      .required('이메일을 입력해주세요.')
      .email('이메일 형식에 맞게 입력해주세요.'),
  })
  .required();
