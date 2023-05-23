'use client';

import { HTMLAttributes, useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type InterestFormValue = {
  type: InterestType;
  region: string[];
  genre: string[];
  keyword: string[];

  termsAgreement: string[];
};

export type InterestType = 'category' | 'keyword';

const InterestFormProvider = ({ children }: FormProviderProps) => {
  const { push } = useRouter();
  const type = useSearchParams().get('type') as InterestType;

  const methods = useForm<InterestFormValue>({
    mode: 'onTouched',
    defaultValues: {
      type: 'category',
      region: [],
      genre: [],
      keyword: [],

      termsAgreement: [],
    },
    resolver: yupResolver(schema),
  });

  const { handleSubmit, setValue } = methods;

  const onValidSubmit: SubmitHandler<InterestFormValue> = (data) => {
    console.log(data);

    if (type === 'category') {
      push('/my/interest?type=keyword');
    } else {
      // TODO: api 통신 시 빈 값 제거, 자동 로그인? 혹은 로그인 화면으로? ??
      push('/');
    }
  };

  useEffect(() => {
    setValue('type', type);
  }, [setValue, type]);

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
    termsAgreement: yup
      .array()
      .of(yup.string())
      .when('type', {
        is: (type: InterestType) => type === 'keyword',
        then: (schema) => schema.min(2),
      }),
  })
  .required();