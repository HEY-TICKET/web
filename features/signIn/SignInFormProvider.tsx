'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type SignInStep = 'email' | 'password' | 'authenticationNumber' | 'initialPassword';

export type SignInFormValues = {
  email: string;
  password: string;
  authenticationNumber: string;
  signInStep: SignInStep;
};

const SignInFormProvider = ({ children }: FormProviderProps) => {
  const methods = useForm<SignInFormValues>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      authenticationNumber: '',
      signInStep: 'email',
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setValue } = methods;

  const onValidSubmit: SubmitHandler<SignInFormValues> = (data) => {
    console.log(data);

    const { signInStep, authenticationNumber } = data;
    const isSignedEmail = false;

    if (signInStep === 'email') {
      if (isSignedEmail) {
        // 패스워드 입력 창
        setValue('signInStep', 'password');
      } else {
        // 인증번호 입력 창
        setValue('signInStep', 'authenticationNumber');
      }
    }
    if (signInStep === 'authenticationNumber') {
      console.log('인증코드 : ', authenticationNumber);
      setValue('signInStep', 'initialPassword');
    }

    if (signInStep === 'password') {
      console.log('로그인');
    }

    if (signInStep === 'initialPassword') {
      console.log('가입 완료');
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

    password: yup.string().when('signInStep', {
      is: (signInStep: SignInStep) => signInStep === 'password' || signInStep === 'initialPassword',
      then: (schema) => schema.required('비밀번호를 입력해주세요.'),
      otherwise: (schema) => schema.notRequired(),
    }),

    authenticationNumber: yup.string().when('signInStep', {
      is: (signInStep: SignInStep) => signInStep === 'authenticationNumber',
      then: (schema) =>
        schema
          .required('인증번호가 일치하지 않아요. 다시 입력해 주세요.')
          .min(6, '인증번호가 일치하지 않아요. 다시 입력해 주세요.')
          .max(6, '인증번호가 일치하지 않아요. 다시 입력해 주세요.'),
      otherwise: (schema) => schema.notRequired(),
    }),
  })
  .required();
