'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { EMAIL_REGEX } from 'constants/regex';
import useCustomToast from 'hooks/useCustomToast';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type MobileAuthenticationFormValue = {
  email: string;
  authenticationNumber: string;
};

const MobileAuthenticationFormProvider = ({ children }: FormProviderProps) => {
  const toast = useCustomToast();
  const { push } = useRouter();
  const email = useSearchParams().get('email') ?? '';
  const find = useSearchParams().get('find');

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
      toast.success('이메일 인증이 확인되었어요.');
      if (find) {
        push(`/auth/write-password?find=true`);
      } else {
        push(`/auth/write-password`);
      }
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
      .matches(EMAIL_REGEX, '이메일 형식에 맞게 입력해주세요.'),
  })
  .required();
