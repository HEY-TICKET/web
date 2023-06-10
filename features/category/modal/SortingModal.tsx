import { FieldValues, FieldName } from 'react-hook-form';

import Button from 'components/common/Button/Button';
import List from 'components/common/List/List';
import { CloseIcon } from 'styles/icons';
import { nullFn } from 'utils/function';

import * as Styles from './SortingModal.styles';

interface CategoryModalProps<T extends FieldValues> {
  name: FieldName<T>;
  list: { caption: string; value: string }[];
  close?: () => void;
  onSubmit?: () => void;
  onCancel?: () => void;
}

const SortingModal = <T extends FieldValues>({
  list,
  name,
  close = nullFn,
  onSubmit,
  onCancel,
}: CategoryModalProps<T>) => {
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
          <List list={list} type={'radio'} name={name} />
        </Styles.Body>
        <Styles.Footer>
          <Button type={'submit'}>적용</Button>
        </Styles.Footer>
      </Styles.ModalWrapper>
    </form>
  );
};

export default SortingModal;
