'use client';

import { Toast, toast } from 'react-hot-toast';
import styled from 'styled-components';

import { SuccessCheckIcon } from 'styles/icons';
import STYLES from 'styles/index';

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
    toast(
      () => (
        <SuccessToast>
          <SuccessCheckIcon />
          {message}
        </SuccessToast>
      ),
      option,
    );
  _toast.error = (message: string, option?: Option) =>
    toast(() => <ErrorToast>{message}</ErrorToast>, option);

  return _toast;
};

export default useCustomToast;

const DefaultToast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 200px;
  background-color: ${STYLES.color.gray900};
  opacity: 0.7;
  color: ${STYLES.color.white};
  padding: 10px 24px;
  border-radius: 8px;
  margin: 0;
`;
const InfoToast = styled(DefaultToast)`
  background-color: ${STYLES.color.blue50};
`;
const WarningToast = styled(DefaultToast)`
  background-color: ${STYLES.color.orange};
`;
const SuccessToast = styled(DefaultToast)`
  background-color: ${STYLES.color.gray770};
  opacity: 1;
  column-gap: 8px;
`;
const ErrorToast = styled(DefaultToast)`
  background-color: ${STYLES.color.red};
`;
