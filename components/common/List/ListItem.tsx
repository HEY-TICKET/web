import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

import styled, { css } from 'styled-components';

import { CheckIcon } from 'styles/icons';

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
  height: 20px;
  width: 20px;
  border-radius: 4px;
`;

const Label = styled.label`
  width: 100%;
  height: inherit;

  margin-left: 4px;
  ${({ theme }) => css`
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
        ${theme.ICON_FILTER.gray900};
      }
    }

    ${Text} {
      color: ${({ theme }) => theme.COLOR.gray400};
    }

    & > input:checked + ${Text} {
      color: ${({ theme }) => theme.COLOR.gray900};
    }

    & > input:disabled ~ ${CheckMark} {
      & > svg {
        ${theme.ICON_FILTER.gray150};
      }
    }

    & > input:checked:disabled ~ ${CheckMark} {
      & > svg {
        ${theme.ICON_FILTER.gray350};
      }
    }
  `}
`;
