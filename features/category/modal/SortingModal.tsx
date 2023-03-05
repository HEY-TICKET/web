'use client';

import { useFormContext } from 'react-hook-form';

import Button from 'components/common/Button/Button';
import List from 'components/common/List/List';
import { CloseIcon } from 'styles/icons';
import { nullFn } from 'utils/function';

import * as Styles from './SortingModal.styles';

interface CategoryModalProps {
  close?: () => void;
  onSubmit?: (data: SortingModalFormValues) => void;
  onCancel?: () => void;
}

export type SortingModalFormValues = {
  sorting: string;
};

export const SORTING_MODAL_DEFAULT_VALUES = {
  sorting: '예매순',
};

const SortingModal = ({ close = nullFn, onSubmit, onCancel }: CategoryModalProps) => {
  const list = ['최신순', '예매순', '조회수순'];

  const methods = useFormContext<SortingModalFormValues>();
  const { handleSubmit } = methods;

  const onValid = (data: SortingModalFormValues) => {
    console.log('sorting modal values => ', data);

    onSubmit?.(data);
    close();
  };

  const clickClose = () => {
    onCancel?.();
    close();
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Styles.ModalWrapper>
        <Styles.Header>
          <span>정렬</span>
          <Styles.CloseIconWrapper onClick={clickClose}>
            <CloseIcon />
          </Styles.CloseIconWrapper>
        </Styles.Header>
        <Styles.Body>
          <List list={list} type={'radio'} name={'sorting'} />
        </Styles.Body>
        <Styles.Footer>
          <Button>적용</Button>
        </Styles.Footer>
      </Styles.ModalWrapper>
    </form>
  );
};

export default SortingModal;
