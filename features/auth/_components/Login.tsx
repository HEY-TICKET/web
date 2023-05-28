'use client';

import { useRouter } from 'next/navigation';
import styled, { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import Logo from 'components/common/Logo/Logo';
import TopBar from 'components/common/Nav/TopBar';
import ConnectForm from 'components/FormProvider/ConnectForm';
import Input from 'components/Input/Input';
import LoginFormProvider, { LoginFormValue } from 'features/auth/FormProvider/LoginFormProvider';
import STYLES from 'styles/index';

const Login = () => {
  const { back } = useRouter();

  return (
    <>
      <TopBar leftProps={<TopBar.BackButton onClick={back} />} />
      <Wrapper>
        <EmailLoginFormWrapper>
          <Logo />
          <LoginFormProvider>
            <ConnectForm<LoginFormValue>>
              {({ formState: { isValid, isSubmitting } }) => (
                <>
                  <InputContainer>
                    <Input<LoginFormValue>
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
          </LoginFormProvider>
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
