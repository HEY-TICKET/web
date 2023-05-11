'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Button from 'components/common/Button/Button';
import ConnectForm from 'components/FormProvider/ConnectForm';
import FormHeader from 'components/FormProvider/FormHeader';
import Input from 'components/Input/Input';
import * as Styles from 'features/auth/auth.styles';
import MobileAuthenticationFormProvider, {
  MobileAuthenticationFormValue,
} from 'features/auth/FormProvider/MobileAuthenticationFormProvider';
import AuthenticationNumberInput from 'features/auth/Input/AuthenticationNumberInput';
import { ArrowRight } from 'styles/icons';

const MobileAuthentication = () => {
  const { back } = useRouter();

  return (
    <>
      <Styles.Header>
        <button onClick={back}>
          <ArrowRight size={28} />
        </button>
      </Styles.Header>
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
                    <AuthenticationNumberInput<MobileAuthenticationFormValue>
                      name={'authenticationNumber'}
                      autoFocus
                      // onTimeOver={() => resetField('authenticationNumber')}
                    />
                  </InputContainer>
                  <Button disabled={!isValid || isSubmitting}>다음</Button>
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
  padding-top: 56px;
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
