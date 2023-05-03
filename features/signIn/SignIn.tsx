'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useFormContext } from 'react-hook-form';
import { css, keyframes } from 'styled-components';

import Button from 'components/common/Button/Button';
import Logo from 'components/common/Logo/Logo';
import ConnectForm from 'components/FormProvider/ConnectForm';
import Input from 'components/Input/New/Input';
import * as Styles from 'features/signIn/SignIn.styles';
import SignInFormProvider, {
  SignInFormValues,
  SignInVia,
} from 'features/signIn/SignInFormProvider';
import { ArrowRight } from 'styles/icons';
import STYLES from 'styles/index';

const SignIn = () => {
  return (
    <Styles.Container>
      <Styles.Header>
        <ArrowRight size={28} />
      </Styles.Header>
      <Styles.SignInFormWrapper>
        <Logo />
        <SignInFormProvider>
          <ConnectForm<SignInFormValues>>
            {({ formState: { isSubmitting, isValid } }) => (
              <Styles.FormContentsWrapper>
                <Input<SignInFormValues> autoFocus name={'email'} labelText={'이메일 주소'} />
                <HiddenInput />
                <Button
                  css={css`
                    margin-top: 12px;
                  `}
                  disabled={!isValid || isSubmitting}
                >
                  이메일로 계속하기
                </Button>
              </Styles.FormContentsWrapper>
            )}
          </ConnectForm>
        </SignInFormProvider>
      </Styles.SignInFormWrapper>
      <Styles.KakaoSignInFormWrapper>
        <Button
          theme={'none'}
          css={css`
            color: ${STYLES.color.gray800};
            background-color: #ffe141;
          `}
        >
          카카오로 계속하기
        </Button>
        <Link href={'/signIn/find_account'}>
          <Styles.FindAccountLink>계정찾기</Styles.FindAccountLink>
        </Link>
      </Styles.KakaoSignInFormWrapper>
    </Styles.Container>
  );
};

export default SignIn;

const move = keyframes` /* 2. css코드를 씀. */
0%{
    transform: translateY(-74px);
    height: 0;
    z-index:-1;
}
90%{
    z-index:-1;
}
100%{
    transform: translateY(0);
    height: 66px;
    z-index: unset;
}
`;

const HiddenInput = () => {
  const [name, setName] = useState<SignInVia | null>(null);
  const methods = useFormContext<SignInFormValues>();
  const {
    formState: { isSubmitSuccessful },
    getValues,
  } = methods;

  useEffect(() => {
    console.log('isSubmitSuccessful', isSubmitSuccessful);
    if (isSubmitSuccessful) {
      setName(getValues('signInVia'));
    }
  }, [getValues, isSubmitSuccessful]);

  if (!name) return null;

  const labelText = {
    password: '비밀번호',
    authenticationNumber: '인증코드 입력',
  };

  const inputType = name === 'password' ? 'password' : 'text';

  return (
    <div
      css={css`
        animation: ${move} 500ms ease-in-out;
      `}
    >
      <Input<SignInFormValues> type={inputType} autoFocus name={name} labelText={labelText[name]} />
    </div>
  );
};
