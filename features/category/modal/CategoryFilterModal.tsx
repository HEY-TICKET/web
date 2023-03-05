'use client';

import { PropsWithChildren } from 'react';

import { useFormContext } from 'react-hook-form';

import Button from 'components/common/Button/Button';
import useCustomToast from 'hooks/useCustomToast';
import { CloseIcon, ResetIcon } from 'styles/icons';
import { nullFn } from 'utils/function';

import * as Styles from './CategoryFilterModal.styles';

interface CategoryModalProps extends PropsWithChildren {
  close?: () => void;
  onSubmit?: (data: FilterModalFormValues) => void;
  onReset?: () => void;
  onCancel?: () => void;
}

export type FilterModalFormValues = {
  region: string[];
  date: Date | null;
  status: string[];
  price: string;
};

export const FILTER_MODAL_DEFAULT_VALUES: FilterModalFormValues = {
  region: ['전체'],
  date: null,
  status: [],
  price: '전체',
};

const CategoryFilterModal = ({
  close = nullFn,
  children,
  onReset,
  onSubmit,
  onCancel,
}: CategoryModalProps) => {
  const toast = useCustomToast();

  const methods = useFormContext<FilterModalFormValues>();
  const { handleSubmit, reset } = methods;

  const resetFormValue = () => {
    reset();
    onReset?.();

    toast(`필터가 초기화되었습니다`);
    close();
  };

  const clickClose = () => {
    onCancel?.();
    close();
  };

  const onValid = (data: FilterModalFormValues) => {
    console.log('filter modal values => ', data);
    onSubmit?.(data);

    toast('필터가 적용되었습니다');
    close();
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Styles.ModalWrapper>
        <Styles.Header>
          <span>필터</span>
          <Styles.CloseIconWrapper onClick={clickClose}>
            <CloseIcon />
          </Styles.CloseIconWrapper>
        </Styles.Header>
        <Styles.Body>{children}</Styles.Body>
        <Styles.Footer>
          <Styles.ResetIconWrapper onClick={resetFormValue}>
            <ResetIcon size={24} />
            <span>초기화</span>
          </Styles.ResetIconWrapper>
          <Button type={'submit'}>적용</Button>
        </Styles.Footer>
      </Styles.ModalWrapper>
    </form>
  );
};

export default CategoryFilterModal;
