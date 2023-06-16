'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { EMAIL_REGEX, PASSWORD_REGEX } from 'constants/regex';
import { authInfo } from 'constants/storage';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type EmailSignInFormValue = {
  email: string;
  password: string;
};

const EmailSignInFormProvider = ({ children }: FormProviderProps) => {
  const { push } = useRouter();
  const { email } = authInfo.getItem();

  const methods = useForm<EmailSignInFormValue>({
    mode: 'onTouched',
    defaultValues: {
      email: email,
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setError } = methods;

  const onValidSubmit: SubmitHandler<EmailSignInFormValue> = (data) => {
    console.log(data);
    const { password } = data;
    const isCorrectPassword = password === 'Test123@';
    if (isCorrectPassword) {
      push('/');
    } else {
      setError('password', { message: '이메일 주소 혹은 비밀번호를 확인해주세요' });
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

export default EmailSignInFormProvider;

const Form = styled.form`
  width: 100%;
`;

const schema = yup
  .object({
    email: yup
      .string()
      .required('이메일을 입력해주세요.')
      .matches(EMAIL_REGEX, '이메일 형식에 맞게 입력해주세요.'),

    password: yup
      .string()
      .required('비밀번호를 입력해주세요.')
      .matches(PASSWORD_REGEX, '영문 대문자, 소문자, 숫자 포함 8자 이상'),
  })
  .required();
