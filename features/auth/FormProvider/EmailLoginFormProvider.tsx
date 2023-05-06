'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type EmailLoginFormValue = {
  email: string;
  password: string;
};

const EmailLoginFormProvider = ({ children }: FormProviderProps) => {
  const email = useSearchParams().get('email') ?? '';

  const methods = useForm<EmailLoginFormValue>({
    mode: 'onTouched',
    defaultValues: {
      email: email,
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setError } = methods;

  const onValidSubmit: SubmitHandler<EmailLoginFormValue> = (data) => {
    console.log(data);

    const isValidPassword = false;

    if (isValidPassword) {
      console.log('로그인');
    } else {
      setError('password', { message: '이메일 주소 혹은 비밀번호를 확인해 주세요.' });
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

export default EmailLoginFormProvider;

const Form = styled.form`
  width: 100%;
`;

const schema = yup
  .object({
    email: yup
      .string()
      .required('이메일을 입력해주세요.')
      .email('이메일 형식에 맞게 입력해주세요.'),

    password: yup.string().required('비밀번로를 입력해주세요.'),
  })
  .required();
