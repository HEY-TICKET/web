'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Button from 'components/common/Button/Button';
import ConnectForm from 'components/FormProvider/ConnectForm';
import FormHeader from 'components/FormProvider/FormHeader';
import Input from 'components/Input/Input';
import * as Styles from 'features/auth/auth.styles';
import FindPasswordFormProvider, {
  FindPasswordFormValue,
} from 'features/auth/FormProvider/FindPasswordFormProvider';
import { ArrowRight } from 'styles/icons';
import STYLES from 'styles/index';

const FindPassword = () => {
  const { back } = useRouter();

  return (
    <>
      <Styles.Header>
        <button onClick={back}>
          <ArrowRight size={28} />
        </button>
      </Styles.Header>
      <Wrapper>
        <FindPasswordFormWrapper>
          <FormHeader>
            <FormHeader.Title>비밀번호 찾기</FormHeader.Title>
            <FormHeader.Description>
              입력한 이메일로 비밀번호 재설정 링크를 전송해 드릴게요.
            </FormHeader.Description>
          </FormHeader>
          <FindPasswordFormProvider>
            <ConnectForm<FindPasswordFormValue>>
              {({ formState: { isValid, isSubmitting } }) => (
                <>
                  <InputContainer>
                    <Input<FindPasswordFormValue>
                      name={'email'}
                      label={'이메일 주소'}
                      placeholder={'abcd@heyticket.co.kr'}
                    />
                  </InputContainer>
                  <Button disabled={!isValid || isSubmitting}>다음</Button>
                </>
              )}
            </ConnectForm>
          </FindPasswordFormProvider>
          <RegisterWrapper>
            <FindPasswordDescription>
              이메일 주소가 기억나지 않으시면
              <br />
              <FindPasswordLink href={'/auth/login'}>다시 가입</FindPasswordLink>해 주세요.
            </FindPasswordDescription>
          </RegisterWrapper>
        </FindPasswordFormWrapper>
      </Wrapper>
    </>
  );
};

export default FindPassword;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 220px;

  align-items: center;
  justify-content: center;
  padding-top: 56px;
`;
const FindPasswordFormWrapper = styled.div`
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
const RegisterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2px;
  width: 328px;
`;

const FindPasswordDescription = styled.span`
  color: ${STYLES.color.gray500};
  text-align: center;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

const FindPasswordLink = styled(Link)`
  color: ${STYLES.color.gray500} !important;
  text-decoration: underline !important;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;
