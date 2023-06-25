'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { cookies } from 'next/headers';
import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { setCookieRefreshToken } from 'app/actions';
import { EMAIL_REGEX, PASSWORD_REGEX } from 'constants/regex';
import { authInfo } from 'constants/storage';
import { useMemberRefreshTokenQuery, useMemberSignInQuery } from 'reactQuery/members';

const JWT_EXPIRY_TIME = 1000 * 60 * 5;
const ONE_MINUTE = 1000 * 60;

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

  const { mutateAsync: signIn } = useMemberSignInQuery();
  const { mutateAsync: refreshToken } = useMemberRefreshTokenQuery();
  const { handleSubmit, setError } = methods;

  const onSilentRefresh = async (email: string) => {
    const cookie = cookies().get('refreshToken');
    if (cookie) {
      const { value } = cookie;
      try {
        const res = await refreshToken({ refreshToken: value, email });
        const { grantType, accessToken, refreshToken: token } = res;
        await setCookieRefreshToken(token);
        axios.defaults.headers.common['Authorization'] = `${grantType} ${accessToken}`;
      } catch (e) {
        console.log(e);
      }
    }
  };

  const onValidSubmit: SubmitHandler<EmailSignInFormValue> = async (data) => {
    console.log(data);
    const { email, password } = data;
    try {
      localStorage.setItem('email', email);
      const res = await signIn({ email, password });
      console.log('login res => ', res);
      const { grantType, accessToken, refreshToken } = res;
      await setCookieRefreshToken(refreshToken);
      axios.defaults.headers.common['Authorization'] = `${grantType} ${accessToken}`;

      // accessToken 만료하기 1분 전에 로그인 연장
      setTimeout(() => onSilentRefresh(email), JWT_EXPIRY_TIME - ONE_MINUTE);
      push('/');
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
