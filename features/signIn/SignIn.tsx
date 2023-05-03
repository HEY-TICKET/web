'use client';

import Link from 'next/link';
import { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import Logo from 'components/common/Logo/Logo';
import ConnectForm from 'components/FormProvider/ConnectForm';
import Input from 'components/Input/Input';
import HiddenInput from 'features/signIn/Input/HiddenInput';
import * as Styles from 'features/signIn/SignIn.styles';
import SignInFormProvider, { SignInFormValues } from 'features/signIn/SignInFormProvider';
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
                <Input<SignInFormValues> autoFocus name={'email'} label={'이메일 주소'} />
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
