'use client';

import Link from 'next/link';
import { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import * as Styles from 'features/signIn/SignIn.styles';
import SignInFormContentsByStep from 'features/signIn/SignInFormContentsByStep';
import SignInFormProvider from 'features/signIn/SignInFormProvider';
import { ArrowRight } from 'styles/icons';
import STYLES from 'styles/index';

const SignIn = () => {
  return (
    <Styles.Container>
      <Styles.Header>
        <ArrowRight size={28} />
      </Styles.Header>
      <Styles.SignInFormWrapper>
        <SignInFormProvider>
          <SignInFormContentsByStep />
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
