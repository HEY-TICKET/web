'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { EMAIL_REGEX } from 'constants/regex';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type FindPasswordFormValue = {
  email: string;
};

const FindPasswordFormProvider = ({ children }: FormProviderProps) => {
  const { push } = useRouter();

  const methods = useForm<FindPasswordFormValue>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const onValidSubmit: SubmitHandler<FindPasswordFormValue> = (data) => {
    const { email } = data;

    push(`/auth/mobile-authentication?email=${email}&find=true`);
  };

  return (
    <FormProvider {...methods}>
      <Form id={'signInForm'} onSubmit={handleSubmit(onValidSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default FindPasswordFormProvider;

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
