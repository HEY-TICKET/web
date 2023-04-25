import Button from 'deprecated/components/common/Button/Button';
import List from 'deprecated/components/common/List/List';
import { CloseIcon } from 'deprecated/styles/icons';
import { nullFn } from 'utils/function';

import * as Styles from './SortingModal.styles';

interface CategoryModalProps {
  close?: () => void;
  onSubmit?: () => void;
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

  const clickClose = () => {
    onCancel?.();
    close();
  };

  return (
    <form onSubmit={onSubmit}>
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
          <Button type={'submit'}>적용</Button>
        </Styles.Footer>
      </Styles.ModalWrapper>
    </form>
  );
};

export default SortingModal;
