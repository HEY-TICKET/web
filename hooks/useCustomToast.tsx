'use client';

import { Toast, toast } from 'react-hot-toast';
import styled, { css } from 'styled-components';

type Option =
  | Partial<
      Pick<Toast, 'id' | 'icon' | 'duration' | 'ariaProps' | 'className' | 'position' | 'iconTheme'>
    >
  | undefined;

const useCustomToast = () => {
  const _toast = (message: string, option?: Option) =>
    toast(() => <DefaultToast>{message}</DefaultToast>, option);

  _toast.info = (message: string, option?: Option) =>
    toast(() => <InfoToast>{message}</InfoToast>, option);
  _toast.warning = (message: string, option?: Option) =>
    toast(() => <WarningToast>{message}</WarningToast>, option);
  _toast.success = (message: string, option?: Option) =>
    toast(() => <SuccessToast>{message}</SuccessToast>, option);
  _toast.error = (message: string, option?: Option) =>
    toast(() => <ErrorToast>{message}</ErrorToast>, option);

  return _toast;
};

export default useCustomToast;

const DefaultToast = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.COLOR.gray900};
    color: ${theme.COLOR.white};
    padding: 10px 24px;
    border-radius: 8px;
    margin: 0;
  `}
`;
const InfoToast = styled(DefaultToast)`
  ${({ theme }) => css`
    background-color: ${theme.COLOR.blue50};
  `}
`;
const WarningToast = styled(DefaultToast)`
  ${({ theme }) => css`
    background-color: ${theme.COLOR.orange};
  `}
`;
const SuccessToast = styled(DefaultToast)`
  ${({ theme }) => css`
    background-color: ${theme.COLOR.green50};
  `}
`;
const ErrorToast = styled(DefaultToast)`
  ${({ theme }) => css`
    background-color: ${theme.COLOR.red};
  `}
`;
