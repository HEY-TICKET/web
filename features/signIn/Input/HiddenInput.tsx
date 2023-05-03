'use client';

import { InputHTMLAttributes, useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import styled, { keyframes } from 'styled-components';

import InputComponents from 'components/Input/InputComponents';
import { SignInFormValues, SignInVia } from 'features/signIn/SignInFormProvider';
import useCountDown from 'hooks/useCountDown';
import STYLES from 'styles/index';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const HiddenInput = ({ disabled, ...restProps }: InputProps) => {
  const { leftTime, play, reset } = useCountDown(false);
  const [name, setName] = useState<SignInVia | null>(null);
  const methods = useFormContext<SignInFormValues>();
  const {
    formState: { isSubmitSuccessful },
    getValues,
  } = methods;

  const reReceiveCode = () => {
    reset();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      const name = getValues('signInVia');
      setName(getValues('signInVia'));
      name === 'authenticationNumber' && play();
    }
  }, [getValues, isSubmitSuccessful, play]);

  if (!name) return null;

  if (name === 'password')
    return (
      <Wrapper>
        <InputComponents<SignInFormValues> name={name} disabled={disabled}>
          <InputComponents.Label text={'비밀번호'}>
            <InputComponents.Input<SignInFormValues> {...restProps} autoFocus name={name} />
          </InputComponents.Label>
        </InputComponents>
        <InputComponents.ErrorMessage<SignInFormValues> name={name} disabled={disabled} />
      </Wrapper>
    );

  if (name === 'authenticationNumber')
    return (
      <AuthenticationNumberWrapper>
        <InputComponents<SignInFormValues> name={name} disabled={disabled}>
          <InputComponents.Label text={'인증코드 입력'}>
            <Contents>
              <InputComponents.Input<SignInFormValues> {...restProps} autoFocus name={name} />
              <Timer>유효시간 {leftTime}</Timer>
            </Contents>
          </InputComponents.Label>
        </InputComponents>
        <InputComponents.ErrorMessage<SignInFormValues> name={name} disabled={disabled} />
        <UnderlineButton type={'button'} onClick={reReceiveCode}>
          인증 코드 다시 받기
        </UnderlineButton>
      </AuthenticationNumberWrapper>
    );

  return <></>;
};

export default HiddenInput;

const passwordMove = keyframes` /* 2. css코드를 씀. */
0%{
    transform: translateY(-74px);
    height: 0;
    z-index:-1;
}
90%{
    z-index:-1;
}
100%{
    transform: translateY(0);
    height: 66px;
    z-index: unset;
}
`;

const AuthenticationNumberWrapperMove = keyframes` /* 2. css코드를 씀. */
0%{
    transform: translateY(-74px);
    height: 0;
    z-index:-1;
}
90%{
    z-index:-1;
}
100%{
    transform: translateY(0);
    height: 80px;
    z-index: unset;
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${passwordMove} 500ms ease-in-out;
`;

const AuthenticationNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${AuthenticationNumberWrapperMove} 500ms ease-in-out;
`;

const UnderlineButton = styled.button`
  width: fit-content;
  margin-top: 6px;
  color: ${STYLES.color.gray500};

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  text-decoration: underline;
`;

const Contents = styled.div`
  display: flex;
  column-gap: 16px;
  & > input {
    width: 100%;
  }
`;

const Timer = styled.span`
  color: ${STYLES.color.orange};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  white-space: nowrap;
`;
