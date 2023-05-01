'use client';

import Link from 'next/link';

import Button from 'components/common/Button/Button';
import Logo from 'components/common/Logo/Logo';
import ConnectForm from 'components/FormProvider/ConnectForm';
import Input from 'components/Input/New/Input';
import * as Styles from 'features/signIn/SignIn.styles';
import SignInFormProvider, { SignInFormValues } from 'features/signIn/SignInFormProvider';
import { ArrowRight } from 'styles/icons';

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
                <Input<SignInFormValues> name={'email'} labelText={'이메일 주소'} />
                <Button disabled={!isValid || isSubmitting}>이메일로 계속하기</Button>
              </Styles.FormContentsWrapper>
            )}
          </ConnectForm>
        </SignInFormProvider>
      </Styles.SignInFormWrapper>
      <Styles.KakaoSignInFormWrapper>
        <Button>카카오로 계속하기</Button>
        <Link href={'/signIn/find_account'}>
          <Styles.FindAccountLink>계정찾기</Styles.FindAccountLink>
        </Link>
      </Styles.KakaoSignInFormWrapper>
    </Styles.Container>
  );
};

export default SignIn;
