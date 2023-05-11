'use client';

import { InputHTMLAttributes, useState } from 'react';

import { FieldValues, Path } from 'react-hook-form';
import styled from 'styled-components';

import InputComponents from 'components/Input/InputComponents';
import { ClosedEyeIcon, OpenedEyeIcon } from 'styles/icons';
import STYLES from 'styles/index';

interface PasswordInputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  message?: string;
}

const PasswordInput = <T extends FieldValues>({
  name,
  disabled,
  message,
  ...restProps
}: PasswordInputProps<T>) => {
  const [inputType, setInputType] = useState<'text' | 'password'>('password');
  const inputTypeIsPassword = inputType === 'password';

  const toggleInputType = () => {
    const nextInputType = inputType === 'text' ? 'password' : 'text';
    setInputType(nextInputType);
  };

  return (
    <Wrapper>
      <InputComponents<T> name={name} disabled={disabled}>
        <InputComponents.Label text={'비밀번호'}>
          <Contents>
            <InputComponents.Input<T> {...restProps} type={inputType} name={name} />
            <IconButton type={'button'} onClick={toggleInputType}>
              {inputTypeIsPassword ? <OpenedEyeIcon /> : <ClosedEyeIcon />}
            </IconButton>
          </Contents>
        </InputComponents.Label>
      </InputComponents>
      <InputComponents.ErrorMessage<T> name={name} disabled={disabled} message={message} />
    </Wrapper>
  );
};

export default PasswordInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  display: flex;
  column-gap: 8px;
  height: 24px;
  & > input {
    width: 100%;
  }
`;

const IconButton = styled.button`
  & > svg {
    ${STYLES.iconFilter.gray400}
  }
`;
