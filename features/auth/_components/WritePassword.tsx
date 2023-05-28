'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import styled from 'styled-components';

import Button from 'components/common/Button/Button';
import TopBar from 'components/common/Nav/TopBar';
import ConnectForm from 'components/FormProvider/ConnectForm';
import FormHeader from 'components/FormProvider/FormHeader';
import WritePasswordFormProvider, {
  WritePasswordFormValue,
} from 'features/auth/FormProvider/WritePasswordFormProvider';
import PasswordInput from 'features/auth/Input/PasswordInput';
import usePopup from 'hooks/usePopup';

const WritePassword = () => {
  const find = useSearchParams().get('find');
  const { replace } = useRouter();

  const { Popup, open: openPopup } = usePopup({
    title: (
      <span>
        이 페이지에서 나가면 이메일 인증을
        <br />
        다시 진행해야 해요. 페이지에서 나갈까요?
      </span>
    ),
    onSubmit: () => replace('/auth/login'),
  });

  return (
    <>
      <TopBar leftProps={<TopBar.BackButton onClick={openPopup} />} />
      <Wrapper>
        <WritePasswordFormWrapper>
          <FormHeader>
            <FormHeader.Title>{`${find ? '새 ' : ''}비밀번호를 입력해 주세요`}</FormHeader.Title>
            {find && (
              <FormHeader.Description>
                새로 사용할 비밀번호를 입력해 주세요.
                <br />
                (이전에 사용하던 비밀번호는 사용할 수 없어요)
              </FormHeader.Description>
            )}
          </FormHeader>
          <WritePasswordFormProvider>
            <ConnectForm<WritePasswordFormValue>>
              {({ formState: { isValid, isSubmitting } }) => (
                <>
                  <InputContainer>
                    <PasswordInput<WritePasswordFormValue>
                      name={'password'}
                      placeholder={'비밀번호 입력'}
                      autoFocus
                      message={'영문 대문자, 소문자, 숫자 포함 8자 이상'}
                    />
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
