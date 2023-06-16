'use client';

import { useCallback } from 'react';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Button from 'components/common/Button/Button';
import TopBar from 'components/common/Nav/TopBar';
import ConnectForm from 'components/FormProvider/ConnectForm';
import FormHeader from 'components/FormProvider/FormHeader';
import Input from 'components/Input/Input';
import { authInfo } from 'constants/storage';
import MobileAuthenticationFormProvider, {
  MobileAuthenticationFormValue,
} from 'features/auth/FormProvider/MobileAuthenticationFormProvider';
import AuthenticationCodeInput from 'features/auth/Input/AuthenticationCodeInput';
import useCountDown from 'hooks/useCountDown';
import { useMemberVerificationSendQuery } from 'reactQuery/members';

const MobileAuthentication = () => {
  const { back } = useRouter();
  const { email } = authInfo.getItem();

  const { leftTime, reset, timeOver } = useCountDown(true, 60 * 5);

  const { mutate: sendVerification } = useMemberVerificationSendQuery();

  const sendAuthenticationCode = useCallback(async () => {
    if (email) {
      await sendVerification({ email, verificationType: 'SIGN_UP' });
      reset();
    }
  }, [email, reset, sendVerification]);

  return (
    <>
      <TopBar leftProps={<TopBar.BackButton onClick={back} />} />
      <Wrapper>
        <MobileAuthenticationFormWrapper>
          <FormHeader>
            <FormHeader.Title>인증 메일이 발송되었어요</FormHeader.Title>
            <FormHeader.Description>
              입력한 이메일 주소로 인증 코드가 발송되었어요. <br /> 인증 코드를 입력해 주세요.
            </FormHeader.Description>
          </FormHeader>
          <MobileAuthenticationFormProvider>
            <ConnectForm<MobileAuthenticationFormValue>>
              {({ formState: { isValid, isSubmitting } }) => (
                <>
                  <InputContainer>
                    <Input<MobileAuthenticationFormValue>
                      name={'email'}
                      label={'이메일 주소'}
                      disabled
                    />
                    <AuthenticationCodeInput<MobileAuthenticationFormValue>
                      name={'code'}
                      autoFocus
                      placeholder={'6자리 입력'}
                      leftTime={leftTime}
                      reset={sendAuthenticationCode}
                      timeOver={timeOver}
                    />
                  </InputContainer>
                  <Button disabled={!isValid || isSubmitting || timeOver}>다음</Button>
                </>
              )}
            </ConnectForm>
          </MobileAuthenticationFormProvider>
        </MobileAuthenticationFormWrapper>
      </Wrapper>
    </>
  );
};

export default MobileAuthentication;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 220px;

  align-items: center;
  justify-content: center;
`;
const MobileAuthenticationFormWrapper = styled.div`
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
