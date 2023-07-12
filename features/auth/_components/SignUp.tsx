'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Button from 'components/common/Button/Button';
import TopBar from 'components/common/Nav/TopBar';
import FormHeader from 'components/FormProvider/FormHeader';
import * as Styles from 'components/Input/Input.styles';
import { authInfo } from 'constants/storage';
import { useMemberVerificationSendQuery } from 'reactQuery/members/mutation';

const SignUp = () => {
  const { push, back } = useRouter();
  const { email } = authInfo.getItem();

  const { mutate: sendVerification } = useMemberVerificationSendQuery();

  const goToAuthenticationPage = () => {
    if (email) {
      sendVerification({ email, verificationType: 'SIGN_UP' });
      push(`/auth/mobile-authentication`);
    }
  };

  return (
    <>
      <TopBar leftProps={<TopBar.BackButton onClick={back} />} />
      <Wrapper>
        <MobileAuthenticationFormWrapper>
          <FormHeader>
            <FormHeader.Title>이메일 인증이 필요해요</FormHeader.Title>
            <FormHeader.Description>아래 이메일로 인증 코드를 보내드려요</FormHeader.Description>
          </FormHeader>
          <InputContainer>
            <Styles.Container>
              <Styles.InputWrapper error={false} disabled>
                <Styles.Label>
                  <Styles.LabelText>이메일 주소</Styles.LabelText>
                  <Styles.Input type="text" disabled defaultValue={email} />
                </Styles.Label>
              </Styles.InputWrapper>
            </Styles.Container>
          </InputContainer>
          <Button onClick={goToAuthenticationPage}>인증 코드 받기</Button>
        </MobileAuthenticationFormWrapper>
      </Wrapper>
    </>
  );
};

export default SignUp;

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
  width: 100%;
  margin-bottom: 20px;
`;
