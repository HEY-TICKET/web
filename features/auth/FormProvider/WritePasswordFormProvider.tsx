'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { PASSWORD_REGEX } from 'constants/regex';
import useCustomToast from 'hooks/useCustomToast';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type WritePasswordFormValue = {
  password: string;
};

const WritePasswordFormProvider = ({ children }: FormProviderProps) => {
  const { push } = useRouter();
  const toast = useCustomToast();

  const find = useSearchParams().get('find');

  const methods = useForm<WritePasswordFormValue>({
    mode: 'onTouched',
    defaultValues: {
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setError } = methods;

  const onValidSubmit: SubmitHandler<WritePasswordFormValue> = (data) => {
    console.log(data);
    const isUsedPassword = true;

    if (find) {
      if (isUsedPassword) {
        setError('password', { message: '이전에 사용하던 비밀번호는 사용할 수 없습니다' });
      }
      push(`/auth/login`);
      // 비밀번호 재설정 api
      setTimeout(() => toast.success('새 비밀번호로 바뀌었어요. 다시 로그인해주세요.'), 1000);
    } else {
      // 초기 비밀번호 설정 api
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

export default WritePasswordFormProvider;

const Form = styled.form`
  width: 100%;
`;

const schema = yup
  .object({
    password: yup
      .string()
      .required('영문 대문자, 소문자, 숫자 포함 8자 이상')
      .matches(PASSWORD_REGEX, '영문 대문자, 소문자, 숫자 포함 8자 이상'),
  })
  .required();
