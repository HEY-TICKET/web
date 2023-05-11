'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled, { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import Logo from 'components/common/Logo/Logo';
import ConnectForm from 'components/FormProvider/ConnectForm';
import Input from 'components/Input/Input';
import * as Styles from 'features/auth/auth.styles';
import EmailLoginFormProvider, {
  EmailLoginFormValue,
} from 'features/auth/FormProvider/EmailLoginFormProvider';
import PasswordInput from 'features/auth/Input/PasswordInput';
import { ArrowRight } from 'styles/icons';
import STYLES from 'styles/index';

const EmailLogin = () => {
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
          <EmailLoginFormProvider>
            <ConnectForm<EmailLoginFormValue>>
              {({ formState: { isValid, isSubmitting } }) => (
                <>
                  <InputContainer>
                    <Input<EmailLoginFormValue> name={'email'} label={'이메일 주소'} disabled />
                    <PasswordInput<EmailLoginFormValue> name={'password'} autoFocus />
                  </InputContainer>
                  <Button disabled={!isValid || isSubmitting}>로그인</Button>
                </>
              )}
            </ConnectForm>
          </EmailLoginFormProvider>
        </EmailLoginFormWrapper>
        <KakaoLoginFormWrapper>
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
          <FindPasswordLink href={'/auth/find-password'}>비밀번호 찾기</FindPasswordLink>
        </KakaoLoginFormWrapper>
      </Wrapper>
    </>
  );
};

export default EmailLogin;

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
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-bottom: 20px;
`;
const KakaoLoginFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 18px;
  width: 328px;
`;

const FindPasswordLink = styled(Link)`
  color: ${STYLES.color.gray500} !important;
  text-decoration: underline !important;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;
