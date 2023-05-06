'use client';

import { InputHTMLAttributes, useEffect } from 'react';

import { FieldValues, Path } from 'react-hook-form';
import styled from 'styled-components';

import InputComponents from 'components/Input/InputComponents';
import useCountDown from 'hooks/useCountDown';
import STYLES from 'styles/index';

interface AuthenticationNumberInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  initTimeSecond?: number;
  onTimeOver?: () => void;
}

const AuthenticationNumberInput = <T extends FieldValues>({
  name,
  disabled,
  onTimeOver,
  initTimeSecond = 15,
  ...restProps
}: AuthenticationNumberInputProps<T>) => {
  const { leftTime, play, reset, timeOver } = useCountDown(false, initTimeSecond);

  const reReceiveCode = () => {
    reset();
  };

  useEffect(() => {
    play();
  }, [play]);

  useEffect(() => {
    if (timeOver) {
      onTimeOver?.();
    }
  }, [onTimeOver, timeOver]);

  return (
    <Wrapper>
      <InputComponents<T> name={name} disabled={disabled}>
        <InputComponents.Label text={'인증코드 입력'}>
          <Contents>
            <InputComponents.Input<T> {...restProps} name={name} />
            <Timer>유효시간 {leftTime}</Timer>
          </Contents>
        </InputComponents.Label>
      </InputComponents>
      <InputComponents.ErrorMessage<T> name={name} disabled={disabled} />
      {timeOver && <TimeOverMessage>유효 시간이 지났어요.</TimeOverMessage>}
      <UnderlineButton type={'button'} onClick={reReceiveCode} timeOver={timeOver}>
        인증 코드 다시 받기
      </UnderlineButton>
    </Wrapper>
  );
};

export default AuthenticationNumberInput;

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

const TimeOverMessage = styled.p`
  color: ${STYLES.color.gray500};
  margin-top: 6px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;
