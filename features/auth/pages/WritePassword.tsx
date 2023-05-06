'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Button from 'components/common/Button/Button';
import ConnectForm from 'components/FormProvider/ConnectForm';
import FormHeader from 'components/FormProvider/FormHeader';
import * as Styles from 'features/auth/auth.styles';
import WritePasswordFormProvider, {
  WritePasswordFormValue,
} from 'features/auth/FormProvider/WritePasswordFormProvider';
import PasswordInput from 'features/auth/Input/PasswordInput';
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
        <EmailLoginFormWrapper>
          <FormHeader.Title>비밀번호를 입력해 주세요</FormHeader.Title>
          <WritePasswordFormProvider>
            <ConnectForm<WritePasswordFormValue>>
              {({ formState: { isValid, isSubmitting } }) => (
                <>
                  <InputContainer>
                    <PasswordInput<WritePasswordFormValue> name={'password'} autoFocus />
                  </InputContainer>
                  <Button disabled={!isValid || isSubmitting}>로그인</Button>
                </>
              )}
            </ConnectForm>
          </WritePasswordFormProvider>
        </EmailLoginFormWrapper>
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
