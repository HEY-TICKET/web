'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { EMAIL_REGEX } from 'constants/regex';
import { authInfo } from 'constants/storage';
import { useMemberValidationQuery } from 'reactQuery/members/mutation';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type SignInFormValue = {
  email: string;
};

const SignInFormProvider = ({ children }: FormProviderProps) => {
  const { replace } = useRouter();

  const methods = useForm<SignInFormValue>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });

  const { mutateAsync: validation } = useMemberValidationQuery();

  const { handleSubmit } = methods;

  const onValidSubmit: SubmitHandler<SignInFormValue> = async (data) => {
    const { email } = data;
    console.table({ email });

    try {
      const isExistedEmail = await validation({ email });
      if (isExistedEmail) {
        replace(`/auth/email-signIn`);
      } else {
        replace(`/auth/signUp`);
      }
      authInfo.setItem({ email });
    } catch (e) {
      console.log(e);
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
      .matches(EMAIL_REGEX, '이메일 형식에 맞게 입력해주세요.'),
  })
  .required();
