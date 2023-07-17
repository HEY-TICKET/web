'use client';

import { useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';
import styled, { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import Logo from 'components/common/Logo/Logo';
import TopBar from 'components/common/Nav/TopBar';
import ConnectForm from 'components/FormProvider/ConnectForm';
import FormHeader from 'components/FormProvider/FormHeader';
import Input from 'components/Input/Input';
import { useLayoutContext } from 'components/layout/_context/LayoutContext';
import SignInFormProvider, { SignInFormValue } from 'features/auth/FormProvider/SignInFormProvider';
import STYLES from 'styles/index';

const SignIn = () => {
  const { back, push } = useRouter();

  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  const { isLoggedIn } = useLayoutContext();

  const clickBackButton = () => {
    console.log(from);
    from ? push(from) : back();
  };

  useEffect(() => {
    console.log('isLoggedIn => ', isLoggedIn);
    if (isLoggedIn) push('/');
  }, [isLoggedIn, push]);

  return (
    <>
      <TopBar leftProps={<TopBar.BackButton onClick={clickBackButton} />} />
      <Wrapper>
        <EmailSignInFormWrapper>
          <FormHeader>
            <Logo />
            <FormHeader.Description>
              로그인 또는 가입을 위해 이메일 주소를 입력해 주세요
            </FormHeader.Description>
          </FormHeader>
          <SignInFormProvider>
            <ConnectForm<SignInFormValue>>
              {({ formState: { isValid, isSubmitting } }) => (
                <>
                  <InputContainer>
                    <Input<SignInFormValue>
                      name={'email'}
                      label={'이메일 주소'}
                      placeholder={'abcd@heyticket.co.kr'}
                      autoFocus
                    />
                  </InputContainer>
                  <Button disabled={!isValid || isSubmitting}>이메일로 계속하기</Button>
                </>
              )}
            </ConnectForm>
          </SignInFormProvider>
        </EmailSignInFormWrapper>
        <SignInWithKakaoFormWrapper>
          <Button
            type={'button'}
            theme={'none'}
            css={css`
              color: ${STYLES.color.gray800};
              background-color: ${STYLES.color.kakaoYellow};
            `}
          >
            카카오로 계속하기
          </Button>
        </SignInWithKakaoFormWrapper>
      </Wrapper>
    </>
  );
};

export default SignIn;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 220px;

  align-items: center;
  justify-content: center;
`;
const EmailSignInFormWrapper = styled.div`
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
const SignInWithKakaoFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 18px;
  width: 328px;
`;
