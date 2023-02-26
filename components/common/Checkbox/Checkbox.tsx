import styled, { css } from 'styled-components';
import { CheckLineIcon } from 'styles/icons';
import { InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  type?: 'checkbox';
  text: string;
}

const Checkbox = ({ text, ...restProps }: CheckboxProps) => {
  return (
    <Label>
      <input type={'checkbox'} {...restProps} />
      <CheckMark>
        <CheckLineIcon size={20} />
      </CheckMark>
      <Text className="checkbox_text">{text}</Text>
    </Label>
  );
};

export default Checkbox;

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
    gap: 12px;

    cursor: pointer;

    // input 숨김처리
    & > input {
      display: none;
    }

    ${CheckMark} {
      background-color: ${theme.COLOR.white};
      border: 1px solid ${theme.COLOR.gray300};
      & > svg {
        ${theme.ICON_FILTER.white};
      }
    }

    & > input:checked + ${CheckMark} {
      background-color: ${theme.COLOR.gray850};
      border: none;
      & > svg {
        ${theme.ICON_FILTER.white};
      }
    }

    ${Text} {
      color: ${({ theme }) => theme.COLOR.gray400};
    }

    & > input:checked ~ ${Text} {
      color: ${({ theme }) => theme.COLOR.gray900};
    }

    & > input:disabled + ${CheckMark} {
      background-color: ${theme.COLOR.gray150};
      border: 1px solid ${theme.COLOR.gray300};
      & > svg {
        ${theme.ICON_FILTER.gray150};
      }
    }

    & > input:checked:disabled + ${CheckMark} {
      background-color: ${theme.COLOR.gray150};
      border: none;
      & > svg {
        ${theme.ICON_FILTER.gray350};
      }
    }
  `}
`;
