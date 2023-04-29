import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

import styled from 'styled-components';

import STYLES from 'styles/index';

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: 'radio';
  label: string;
  name: string;
}

const Radio = forwardRef(
  ({ label, name, ...restProps }: RadioProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Label>
        <Input type={'radio'} name={name} ref={ref} {...restProps} />
        <Span>{label}</Span>
      </Label>
    );
  },
);

export default Radio;

const Label = styled.label`
  display: flex;
  align-items: center;

  gap: 12px;

  width: 100%;
  height: inherit;

  cursor: pointer;
`;

const Span = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
`;

const Input = styled.input`
  appearance: none;

  width: 22px;
  height: 22px;

  border-radius: 100px;
  border: 1px solid ${STYLES.color.gray300};
  & + ${Span} {
    color: ${STYLES.color.gray400};
  }
  &:checked {
    background-color: black;
    background-clip: content-box;
    padding: 4px;
    border: 1px solid ${STYLES.color.gray900};
    accent-color: ${STYLES.color.gray900};
    & + ${Span} {
      color: ${STYLES.color.gray900};
    }
  }
`;
