'use client';

import { HTMLAttributes } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type InterestFormValue = {
  region: string[];
  genre: string[];
  keyword: string[];
};

export type InterestType = 'category' | 'keyword';

const InterestFormProvider = ({ children }: FormProviderProps) => {
  const { push } = useRouter();
  const type = useSearchParams().get('type') as InterestType;

  const methods = useForm<InterestFormValue>({
    mode: 'onTouched',
    defaultValues: {
      region: [],
      genre: [],
      keyword: [],
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = methods;

  const onValidSubmit: SubmitHandler<InterestFormValue> = (data) => {
    console.log(data);

    if (type === 'category') {
      push('/my/interest?type=keyword');
    } else {
      // TODO: api 통신 시 빈 값 제거, 자동 로그인? 혹은 로그인 화면으로? ??
      console.log(data);
      push('/');
    }
  };

  return (
    <FormProvider {...methods}>
      <Form id={'interestForm'} onSubmit={handleSubmit(onValidSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default InterestFormProvider;

const Form = styled.form`
  width: 100%;
`;

const schema = yup
  .object({
    // email: yup
    //   .string()
    //   .required('이메일을 입력해주세요.')
    //   .email('이메일 형식에 맞게 입력해주세요.'),
  })
  .required();
