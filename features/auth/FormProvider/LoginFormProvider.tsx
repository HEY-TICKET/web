'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { EMAIL_REGEX } from 'constants/regex';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type LoginFormValue = {
  email: string;
};

const LoginFormProvider = ({ children }: FormProviderProps) => {
  const { push } = useRouter();

  const methods = useForm<LoginFormValue>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const onValidSubmit: SubmitHandler<LoginFormValue> = (data) => {
    console.log(data);

    const isSubscribedEmail = false;

    if (isSubscribedEmail) {
      // FIXME: 세션으로 데이터 전달 ? or route query 로 전달?
      push(`/auth/email-login?email=${data.email}`);
    } else {
      //
      push(`/auth/mobile-authentication?email=${data.email}`);
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

export default LoginFormProvider;

const Form = styled.form`
  width: 100%;
`;

const schema = yup
  .object({
    email: yup
      .string()
      .required('이메일을 입력해주세요.')
      .matches(EMAIL_REGEX, '이메일 형식에 맞게 입력해주세요.'),
  })
  .required();
