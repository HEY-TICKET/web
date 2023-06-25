'use client';

import { HTMLAttributes, useEffect } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import * as yup from 'yup';

import { authInfo } from 'constants/storage';
import { useMemberSignUpQuery } from 'reactQuery/members';
import { AreaTypes, GenreTypes } from 'types/performance';
import { removeEmpty } from 'utils/array';

type FormProviderProps = HTMLAttributes<HTMLElement>;

export type InterestFormValue = {
  type: InterestType;
  areas: AreaTypes[];
  genres: GenreTypes[];
  keywords: string[];

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
      areas: [],
      genres: [],
      keywords: [],

      termsAgreement: [],
    },
    resolver: yupResolver(schema),
  });

  const { mutate: signUp } = useMemberSignUpQuery();

  const { handleSubmit, setValue } = methods;

  const onValidSubmit: SubmitHandler<InterestFormValue> = async (data) => {
    console.log(data);
    const { areas, genres, keywords: dataKeywords } = data;

    if (type === 'category') {
      authInfo.setItem({ areas: areas, genres: genres }, true);
      push('/my/interest?type=keyword');
    } else {
      authInfo.setItem({ keywords: removeEmpty<string>(dataKeywords) }, true);

      const { email, password, areas, genres, keywords } = authInfo.getItem();
      const keywordPush = areas?.length || genres?.length || keywords?.length;
      if (email && password) {
        localStorage.setItem('email', email);
        const res = await signUp({
          email,
          password,
          areas,
          genres,
          keywords,
          verificationCode: '0000',
          keywordPush: Boolean(keywordPush),
        });
        console.log('response', res);
      }
      // push('/');
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
