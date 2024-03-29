import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

import styled from 'styled-components';

import { CheckIcon } from 'styles/icons';
import STYLES from 'styles/index';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: 'checkbox' | 'radio';
  text: string;
}

const ListItem = forwardRef(
  (
    { type = 'checkbox', text, ...restProps }: CheckboxProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Label>
        <input type={type} ref={ref} {...restProps} />
        <Text className="checkbox_text">{text}</Text>
        <CheckMark>
          <CheckIcon size={24} />
        </CheckMark>
      </Label>
    );
  },
);

export default ListItem;

const Text = styled.span`
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

const CheckMark = styled.span`
  height: 24px;
  width: 24px;
  border-radius: 4px;
`;

const Label = styled.label`
  width: 100%;
  height: inherit;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  cursor: pointer;

  // input 숨김처리
  & > input {
    display: none;
  }

  ${CheckMark} {
    & > svg {
      display: none;
    }
  }

  & > input:checked ~ ${CheckMark} {
    & > svg {
      display: flex;
      ${STYLES.iconFilter.gray900};
    }
  }

  ${Text} {
    color: ${STYLES.color.gray400};
  }

  & > input:checked + ${Text} {
    color: ${STYLES.color.gray900};
  }

  & > input:disabled ~ ${CheckMark} {
    & > svg {
      ${STYLES.iconFilter.gray150};
    }
  }

  & > input:checked:disabled ~ ${CheckMark} {
    & > svg {
      ${STYLES.iconFilter.gray350};
    }
  }
`;
