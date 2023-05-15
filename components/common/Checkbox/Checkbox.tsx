import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

import styled from 'styled-components';

import { CheckLineIcon } from 'styles/icons';
import STYLES from 'styles/index';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: 'checkbox';
  text: string | JSX.Element;
}

const Checkbox = forwardRef(
  ({ text, ...restProps }: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Label>
        <input type={'checkbox'} ref={ref} {...restProps} />
        <CheckMark>
          <CheckLineIcon size={20} />
        </CheckMark>
        <Text className="checkbox_text">{text}</Text>
      </Label>
    );
  },
);

export default Checkbox;

export const Text = styled.span`
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;

  & > strong {
    text-decoration: underline;
  }
`;

const CheckMark = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 4px;
`;

const Label = styled.label`
  width: 100%;
  height: inherit;

  margin-left: 4px;
  display: flex;
  align-items: center;
  gap: 12px;

  cursor: pointer;

  // input 숨김처리
  & > input {
    display: none;
  }

  ${CheckMark} {
    background-color: ${STYLES.color.white};
    border: 1px solid ${STYLES.color.gray300};
    & > svg {
      ${STYLES.iconFilter.white};
    }
  }

  & > input:checked + ${CheckMark} {
    background-color: ${STYLES.color.gray850};
    border: none;
    & > svg {
      ${STYLES.iconFilter.white};
    }
  }

  ${Text} {
    color: ${STYLES.color.gray400};
  }

  & > input:checked ~ ${Text} {
    color: ${STYLES.color.gray900};
  }

  & > input:disabled + ${CheckMark} {
    background-color: ${STYLES.color.gray150};
    border: 1px solid ${STYLES.color.gray300};
    & > svg {
      ${STYLES.iconFilter.gray150};
    }
  }

  & > input:checked:disabled + ${CheckMark} {
    background-color: ${STYLES.color.gray150};
    border: none;
    & > svg {
      ${STYLES.iconFilter.gray350};
    }
  }
`;
