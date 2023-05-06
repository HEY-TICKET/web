'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled, { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import Logo from 'components/common/Logo/Logo';
import ConnectForm from 'components/FormProvider/ConnectForm';
import Input from 'components/Input/Input';
import * as Styles from 'features/auth/auth.styles';
import LoginFormProvider, { LoginFormValue } from 'features/auth/FormProvider/LoginFormProvider';
import { ArrowRight } from 'styles/icons';
import STYLES from 'styles/index';

const Login = () => {
  const { back } = useRouter();

  return (
    <>
      <Styles.Header>
        <button onClick={back}>
          <ArrowRight size={28} />
        </button>
      </Styles.Header>
      <Wrapper>
        <EmailLoginFormWrapper>
          <Logo />
          <LoginFormProvider>
            <ConnectForm<LoginFormValue>>
              {({ formState: { isValid, isSubmitting } }) => (
                <>
                  <InputContainer>
                    <Input<LoginFormValue> name={'email'} label={'이메일 주소'} autoFocus />
                  </InputContainer>
                  <Button disabled={!isValid || isSubmitting}>이메일로 계속하기</Button>
                </>
              )}
            </ConnectForm>
          </LoginFormProvider>
        </EmailLoginFormWrapper>
        <KakaoLoginFormWrapper>
          <Button
            type={'button'}
            theme={'none'}
            css={css`
              color: ${STYLES.color.gray800};
              background-color: #ffe141;
            `}
          >
            카카오로 계속하기
          </Button>
          <Link href={'/auth/find-account'}>
            <FindAccountLink>계정찾기</FindAccountLink>
          </Link>
        </KakaoLoginFormWrapper>
      </Wrapper>
    </>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 220px;

  align-items: center;
  justify-content: center;
  padding-top: 56px;
`;
const EmailLoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 36px;
  width: 328px;
  min-height: 216px;

  padding-top: 220px;
`;
const InputContainer = styled.div`
  margin-bottom: 20px;
`;
const KakaoLoginFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 18px;
  width: 328px;
`;

const FindAccountLink = styled.span`
  color: ${STYLES.color.gray500};
  text-decoration: underline;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;
