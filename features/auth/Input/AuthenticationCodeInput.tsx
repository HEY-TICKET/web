'use client';

import { InputHTMLAttributes } from 'react';

import { FieldValues, Path } from 'react-hook-form';
import styled from 'styled-components';

import InputComponents from 'components/Input/InputComponents';
import { UseCountDownReturnType } from 'hooks/useCountDown';
import useCustomToast from 'hooks/useCustomToast';
import STYLES from 'styles/index';

interface AuthenticationCodeInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement>,
    Omit<UseCountDownReturnType, 'pause' | 'play'> {
  name: Path<T>;
}

const AuthenticationCodeInput = <T extends FieldValues>({
  name,
  disabled,
  leftTime,
  reset,
  timeOver,
  ...restProps
}: AuthenticationCodeInputProps<T>) => {
  const toast = useCustomToast();

  const reReceiveCode = () => {
    // TODO: 인증코드 메시지 관리, 토스트 리팩토링...
    toast.success('인증 코드를 다시 보내드렸어요.');
    reset();
  };

  return (
    <Wrapper>
      <InputComponents<T> name={name} disabled={disabled}>
        <InputComponents.Label text={'인증코드 입력'}>
          <Contents>
            <InputComponents.Input<T> {...restProps} name={name} disabled={disabled} />
            <Timer>유효시간 {leftTime}</Timer>
          </Contents>
        </InputComponents.Label>
      </InputComponents>
      <InputComponents.ErrorMessage<T>
        name={name}
        disabled={disabled}
        message={timeOver ? '유효시간이 지났어요.' : ''}
      />
      <UnderlineButton type={'button'} onClick={reReceiveCode} timeOver={timeOver}>
        인증 코드 다시 받기
      </UnderlineButton>
    </Wrapper>
  );
};

export default AuthenticationCodeInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UnderlineButton = styled.button<{ timeOver: boolean }>`
  width: fit-content;
  margin-top: 6px;
  color: ${({ timeOver }) => (timeOver ? STYLES.color.blue50 : STYLES.color.gray500)};

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  text-decoration: underline;
`;

const Contents = styled.div`
  display: flex;
  column-gap: 16px;
  height: 24px;
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
