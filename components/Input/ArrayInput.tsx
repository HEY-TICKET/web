'use client';

import React, { InputHTMLAttributes, KeyboardEventHandler, MouseEvent, useState } from 'react';

import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';
import styled, { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import Chip from 'components/common/Chip/Chip';
import * as ChipStyles from 'components/common/Chip/Chip.styles';
import * as Styles from 'components/Input/Input.styles';
import InputComponents from 'components/Input/InputComponents';
import STYLES from 'styles/index';
import { textOverflowEllipsis } from 'utils/common';

interface InputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  label?: string;
  fallback: JSX.Element;
}

const ArrayInput = <T extends FieldValues>({
  fallback,
  label,
  name,
  disabled,
  ...restProps
}: InputProps<T>) => {
  const methods = useFormContext<T>();
  const { register, getValues, setValue } = methods;
  const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);
  const [index, setIndex] = useState(0);
  const { ref: _ref, ...restRegister } = register(`${name}.${index}` as Path<T>);
  const [values, setValues] = useState(getValues(name));

  const callbackRef = (node: HTMLInputElement) => {
    setInputRef(node);
    _ref(node);
  };

  const addKeyword = () => {
    if (inputRef) {
      setValues(getValues(name));
      setIndex((prev) => prev + 1);
      inputRef.value = '';
      inputRef.focus();
    }
  };

  const onKeyboardEvent: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.nativeEvent.isComposing) {
      return;
    }
    if (event.code === 'Enter' && inputRef) {
      event.preventDefault();
      addKeyword();
    }
  };

  const deleteValue = (event: MouseEvent<HTMLDivElement>, deleteIndex: number) => {
    if (inputRef) {
      const currentValue = inputRef.value || '';

      const prevItems = getValues(name);
      currentValue && prevItems.pop();
      const nextItems = prevItems.filter((item: string, i: number) => !(deleteIndex === i));
      setValue(name, [...nextItems, currentValue] as PathValue<T, Path<T>>);
      setIndex(nextItems.length);
      setValues(nextItems);
    }
  };

  return (
    <Wrapper>
      <InputWrapper>
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <InputComponents<T> name={name} disabled={disabled}>
            <InputComponents.Label text={label}>
              <Styles.Input
                type="text"
                disabled={disabled}
                {...restProps}
                {...restRegister}
                ref={callbackRef}
                onKeyDown={onKeyboardEvent}
              />
            </InputComponents.Label>
          </InputComponents>
          <InputComponents.ErrorMessage<T> name={name} disabled={disabled} />
        </div>
        <Button
          onClick={addKeyword}
          type={'button'}
          css={css`
            width: fit-content;
            padding: 14px 24px;
          `}
        >
          등록
        </Button>
      </InputWrapper>
      <FallbackWrapper>
        {!values.length ? (
          fallback
        ) : (
          <ChipsContainer>
            {values.map((value: string, index: number) => {
              if (!value) return <React.Fragment key={index} />;
              return (
                <Chip
                  key={index}
                  text={value}
                  onClose={(event) => deleteValue(event, index)}
                  closable
                />
              );
            })}
          </ChipsContainer>
        )}
      </FallbackWrapper>
    </Wrapper>
  );
};

export default ArrayInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  column-gap: 8px;

  & > div:first-child {
    flex: 1;
  }
`;

const ChipsContainer = styled.div`
  display: flex;

  column-gap: 10px;
  row-gap: 12px;
  flex-wrap: wrap;
  min-height: 80px;

  ${ChipStyles.ChipWrapper} {
    height: fit-content;
  }

  ${ChipStyles.Chip} {
    color: ${STYLES.color.gray900};
    ${textOverflowEllipsis({ maxWidth: 300 })}
  }
`;

const FallbackWrapper = styled.div`
  padding-top: 16px;
`;
