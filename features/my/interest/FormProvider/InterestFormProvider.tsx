'use client';

import { HTMLAttributes, useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { authInfo } from 'constants/storage';

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
    const { region, genre, keyword } = data;

    if (type === 'category') {
      authInfo.setItem({ areas: region, genres: genre }, true);
      push('/my/interest?type=keyword');
    } else {
      authInfo.setItem({ keywords: keyword }, true);
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
