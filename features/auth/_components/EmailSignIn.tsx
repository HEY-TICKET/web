'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import styled from 'styled-components';

import Button from 'components/common/Button/Button';
import Logo from 'components/common/Logo/Logo';
import TopBar from 'components/common/Nav/TopBar';
import ConnectForm from 'components/FormProvider/ConnectForm';
import Input from 'components/Input/Input';
import { useLayoutContext } from 'components/layout/_context/LayoutContext';
import EmailSignInFormProvider, {
  EmailSignInFormValue,
} from 'features/auth/FormProvider/EmailSignInFormProvider';
import PasswordInput from 'features/auth/Input/PasswordInput';
import STYLES from 'styles/index';

const EmailSignIn = () => {
  const { back, push } = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  const { isLoggedIn } = useLayoutContext();

  const clickBackButton = () => {
    console.log(from);
    from ? push(from) : back();
  };

  useEffect(() => {
    console.log('email sign in logged in', isLoggedIn);
    if (isLoggedIn) push('/');
  }, [isLoggedIn, push]);

  return (
    <>
      <TopBar leftProps={<TopBar.BackButton onClick={clickBackButton} />} />
      <Wrapper>
        <EmailSignInFormWrapper>
          <Logo />
          <EmailSignInFormProvider>
            <ConnectForm<EmailSignInFormValue>>
              {({ formState: { isValid, isSubmitting } }) => (
                <>
                  <InputContainer>
                    <Input<EmailSignInFormValue> name={'email'} label={'이메일 주소'} disabled />
                    <PasswordInput<EmailSignInFormValue>
                      name={'password'}
                      placeholder={'비밀번호 입력'}
                      message={'영문 대문자, 소문자, 숫자 포함 8자 이상'}
                      autoFocus
                    />
                  </InputContainer>
                  <Button disabled={!isValid || isSubmitting}>로그인</Button>
                </>
              )}
            </ConnectForm>
          </EmailSignInFormProvider>
        </EmailSignInFormWrapper>
        <FindPasswordLink href={`/auth/find-password`}>비밀번호 찾기</FindPasswordLink>
      </Wrapper>
    </>
  );
};

export default EmailSignIn;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;

  align-items: center;
  justify-content: center;
  padding-top: 56px;
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
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 20px;
`;

const FindPasswordLink = styled(Link)`
  color: ${STYLES.color.gray500} !important;
  text-decoration: underline !important;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;
