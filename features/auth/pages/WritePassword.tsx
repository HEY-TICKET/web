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
import usePopup from 'hooks/usePopup';
import { ArrowRight } from 'styles/icons';

const WritePassword = () => {
  const { back } = useRouter();

  const { Popup, open: openPopup } = usePopup({
    title: (
      <span>
        이 페이지에서 나가면 이메일 인증을
        <br />
        다시 진행해야 해요. 페이지에서 나갈까요?
      </span>
    ),
    onSubmit: back,
  });

  return (
    <>
      <Styles.Header>
        <button onClick={openPopup}>
          <ArrowRight size={28} />
        </button>
      </Styles.Header>
      <Wrapper>
        <WritePasswordFormWrapper>
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
        </WritePasswordFormWrapper>
      </Wrapper>
      <Popup />
    </>
  );
};

export default WritePassword;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 220px;

  align-items: center;
  justify-content: center;
  padding-top: 56px;
`;

const WritePasswordFormWrapper = styled.div`
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
