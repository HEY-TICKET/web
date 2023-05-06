'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type MobileAuthenticationFormValue = {
  email: string;
  authenticationNumber: string;
};

const MobileAuthenticationFormProvider = ({ children }: FormProviderProps) => {
  const { push } = useRouter();
  const email = useSearchParams().get('email') ?? '';

  const methods = useForm<MobileAuthenticationFormValue>({
    mode: 'onTouched',
    defaultValues: {
      email: email,
      authenticationNumber: '',
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setError } = methods;

  const onValidSubmit: SubmitHandler<MobileAuthenticationFormValue> = (data) => {
    console.log(data);

    const isValidAuthenticationNumber = true;

    if (isValidAuthenticationNumber) {
      push(`/auth/write-password`);
    } else {
      setError('authenticationNumber', {
        message: '인증코드가 일치하지 않아요. 다시 입력해 주세요.',
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <Form id={'signInForm'} onSubmit={handleSubmit(onValidSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default MobileAuthenticationFormProvider;

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
