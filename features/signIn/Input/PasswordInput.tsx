'use client';

import { InputHTMLAttributes, useState } from 'react';

import { FieldValues, Path } from 'react-hook-form';
import styled from 'styled-components';

import InputComponents from 'components/Input/InputComponents';
import { ClosedEyeIcon, OpenedEyeIcon } from 'styles/icons';
import STYLES from 'styles/index';

interface PasswordInputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
}

const PasswordInput = <T extends FieldValues>({
  name,
  disabled,
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
            <InputComponents.Input<T> {...restProps} type={inputType} autoFocus name={name} />
            <IconButton type={'button'} onClick={toggleInputType}>
              {inputTypeIsPassword ? <ClosedEyeIcon /> : <OpenedEyeIcon />}
            </IconButton>
          </Contents>
        </InputComponents.Label>
      </InputComponents>
      <InputComponents.ErrorMessage<T> name={name} disabled={disabled} />
    </Wrapper>
  );
};

export default PasswordInput;

// const passwordMove = keyframes` /* 2. css코드를 씀. */
// 0%{
//     transform: translateY(-74px);
//     height: 0;
//     z-index:-1;
// }
// 90%{
//     z-index:-1;
// }
// 100%{
//     transform: translateY(0);
//     height: 66px;
//     z-index: unset;
// }
// `;

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
