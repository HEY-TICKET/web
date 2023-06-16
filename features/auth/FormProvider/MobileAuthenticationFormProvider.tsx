'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { EMAIL_REGEX } from 'constants/regex';
import { authInfo } from 'constants/storage';
import useCustomToast from 'hooks/useCustomToast';
import { useMemberVerifyQuery } from 'reactQuery/members';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type MobileAuthenticationFormValue = {
  email: string;
  code: string;
};

const MobileAuthenticationFormProvider = ({ children }: FormProviderProps) => {
  const toast = useCustomToast();
  const { push } = useRouter();
  const { email } = authInfo.getItem();
  const find = useSearchParams().get('find');

  const methods = useForm<MobileAuthenticationFormValue>({
    mode: 'onTouched',
    defaultValues: {
      email: email,
      code: '',
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setError } = methods;

  const { mutateAsync: verify } = useMemberVerifyQuery();

  const onValidSubmit: SubmitHandler<MobileAuthenticationFormValue> = async (data) => {
    const { email, code } = data;

    try {
      const isValid = await verify({ email, code });

      if (isValid) {
        toast.success('이메일 인증이 확인되었어요.');
        push(find ? `/auth/write-password?find=true` : `/auth/write-password`);
      } else {
        setError('code', {
          message: '인증코드가 일치하지 않아요. 다시 입력해 주세요.',
        });
      }
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

    code: yup
      .string()
      // .min(6, '인증번호는 6자리 입니다.')
      .required('인증번호를 입력해주세요.'),
  })
  .required();
