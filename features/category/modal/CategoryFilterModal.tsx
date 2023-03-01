import { PropsWithChildren } from 'react';

import { FormProvider, UseFormReturn } from 'react-hook-form';

import Button from 'components/common/Button/Button';
import { CloseIcon, ResetIcon } from 'styles/icons';
import { nullFn } from 'utils/function';

import * as Styles from './CategoryFilterModal.styles';

interface CategoryModalProps extends PropsWithChildren {
  close?: () => void;
  onCancel?: () => void;
  onSubmit?: (data: FilterModalFormValues) => void;
  methods: UseFormReturn<FilterModalFormValues>;
}

export type FilterModalFormValues = {
  region: string[];
  date: Date;
  status: string[];
  price: string;
};

export const FILTER_MODAL_DEFAULT_VALUES = {
  region: ['전체'],
  date: new Date(),
  status: ['공연중'],
  price: '전체',
};

const CategoryFilterModal = ({
  close = nullFn,
  onSubmit,
  methods,
  children,
  onCancel,
}: CategoryModalProps) => {
  const {
    handleSubmit,
    reset,
    formState: { isDirty },
  } = methods;

  const submit = (data: FilterModalFormValues) => {
    onSubmit?.(data);
    close();
  };

  const resetFormValue = () => {
    reset(FILTER_MODAL_DEFAULT_VALUES);
  };

  const clickClose = () => {
    onCancel?.();
    close();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>
        <Styles.ModalWrapper>
          <Styles.Header>
            <span>필터</span>
            <Styles.CloseIconWrapper onClick={clickClose}>
              <CloseIcon />
            </Styles.CloseIconWrapper>
          </Styles.Header>
          <Styles.Body>{children}</Styles.Body>
          <Styles.Footer>
            <Styles.ResetIconWrapper disabled={!isDirty} onClick={resetFormValue}>
              <ResetIcon size={24} />
              <span>초기화</span>
            </Styles.ResetIconWrapper>
            <Button type={'submit'}>적용</Button>
          </Styles.Footer>
        </Styles.ModalWrapper>
      </form>
    </FormProvider>
  );
};

export default CategoryFilterModal;
