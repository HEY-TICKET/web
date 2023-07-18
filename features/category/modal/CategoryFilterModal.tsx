import { PropsWithChildren } from 'react';

import Button from 'components/common/Button/Button';
import CloseButton from 'components/common/Button/CloseButton';
import { ResetIcon } from 'styles/icons';
import { AreaTypesWithAll, StatusTypes } from 'types/performance';
import { nullFn } from 'utils/function';

import * as Styles from './CategoryFilterModal.styles';

interface CategoryModalProps extends PropsWithChildren {
  close?: () => void;
  onCancel?: () => void;
  onSubmit?: () => void;
  onReset?: () => void;
  disabledReset?: boolean;
}

export type FilterModalFormValues = {
  areas: AreaTypesWithAll[];
  date?: Date;
  status: StatusTypes[];
  price: string;
};

export const FILTER_MODAL_DEFAULT_VALUES: FilterModalFormValues = {
  areas: ['ALL'],
  date: undefined,
  status: [],
  price: JSON.stringify({ minPrice: 0 }),
};

const CategoryFilterModal = ({
  close = nullFn,
  children,
  onCancel,
  onReset,
  onSubmit,
}: CategoryModalProps) => {
  const resetFormValue = () => {
    onReset?.();
  };

  const clickClose = () => {
    onCancel?.();
    close();
  };

  return (
    <form onSubmit={onSubmit}>
      <Styles.ModalWrapper>
        <Styles.Header>
          <span>필터</span>
          <CloseButton onClick={clickClose} />
        </Styles.Header>
        <Styles.Body>{children}</Styles.Body>
        <Styles.Footer>
          <Styles.ResetIconWrapper
            // disabled={disabledReset}
            onClick={resetFormValue}
          >
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
