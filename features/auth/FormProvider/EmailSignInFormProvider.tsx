'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import * as yup from 'yup';

import { useLayoutContext } from 'components/layout/_context/LayoutContext';
import { REFRESH_TOKEN } from 'constants/auth';
import { EMAIL_REGEX, PASSWORD_REGEX } from 'constants/regex';
import { authInfo } from 'constants/storage';
import { useMemberSignInQuery } from 'reactQuery/members/mutation';

type FormProviderProps = HTMLAttributes<HTMLElement>;

const cookies = new Cookies();

export type EmailSignInFormValue = {
  email: string;
  password: string;
};

const EmailSignInFormProvider = ({ children }: FormProviderProps) => {
  const { email } = authInfo.getItem();
  const { login } = useLayoutContext();

  const methods = useForm<EmailSignInFormValue>({
    mode: 'onTouched',
    defaultValues: {
      email: email,
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const { mutateAsync: signIn } = useMemberSignInQuery();
  const { handleSubmit, setError } = methods;

  const onValidSubmit: SubmitHandler<EmailSignInFormValue> = async (data) => {
    console.log(data);
    const { email, password } = data;
    try {
      localStorage.setItem('email', email);
      const res = await signIn({ email, password });
      const { refreshToken } = res;
      cookies.set(REFRESH_TOKEN, refreshToken, { path: '/', sameSite: 'strict' });
      login();

      // const nextUrl = searchParams.get('next') ?? '/';
      // push(nextUrl);
    } catch (e) {
      console.log(e);
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
