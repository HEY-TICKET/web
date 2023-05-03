'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type SignInVia = 'password' | 'authenticationNumber';

export type SignInFormValues = {
  email: string;
  password: string;
  authenticationNumber: string;
  signInVia: SignInVia | null;
};

const SignInFormProvider = ({ children }: FormProviderProps) => {
  const methods = useForm<SignInFormValues>({
    mode: 'onTouched',
    defaultValues: { email: '', password: '', authenticationNumber: '', signInVia: null },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setValue } = methods;

  const onValidSubmit: SubmitHandler<SignInFormValues> = (data) => {
    console.log(data);

    const isSignedEmail = false;

    if (isSignedEmail) {
      // 패스워드 입력 창
      setValue('signInVia', 'password');
    } else {
      // 인증번호 입력 창
      setValue('signInVia', 'authenticationNumber');
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

    password: yup.string().when('signInVia', {
      is: (signInVia: SignInVia) => signInVia === 'password',
      then: (schema) => schema.required('비밀번호를 입력해주세요.'),
      otherwise: (schema) => schema.notRequired(),
    }),

    authenticationNumber: yup.string().when('signInVia', {
      is: (signInVia: SignInVia) => signInVia === 'authenticationNumber',
      then: (schema) =>
        schema
          .required('인증번호가 일치하지 않아요. 다시 입력해 주세요.')
          .min(6, '인증번호가 일치하지 않아요. 다시 입력해 주세요.')
          .max(6, '인증번호가 일치하지 않아요. 다시 입력해 주세요.'),
      otherwise: (schema) => schema.notRequired(),
    }),
  })
  .required();
