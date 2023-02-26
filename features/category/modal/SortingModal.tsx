import { useState } from 'react';

import Button from 'components/common/Button/Button';
import List from 'components/common/List/List';
import { CloseIcon } from 'styles/icons';

import * as Styles from './SortingModal.styles';

interface CategoryModalProps {
  onClose?: () => void;
}

const SortingModal = ({ onClose = () => void 0 }: CategoryModalProps) => {
  const list = ['최신순', '예매순', '조회수순', '기대평순'];

  const [selected, setSelected] = useState(list[0]);

  const clickItem = (value: string) => {
    setSelected(value);
  };

  const active = (value: string) => {
    return selected === value;
  };

  return (
    <Styles.ModalWrapper>
      <Styles.Header>
        <span>정렬</span>
        <Styles.CloseIconWrapper onClick={() => onClose()}>
          <CloseIcon />
        </Styles.CloseIconWrapper>
      </Styles.Header>
      <Styles.Body>
        <List list={list} onClick={clickItem} active={active} />
      </Styles.Body>
      <Styles.Footer>
        <Button>적용</Button>
      </Styles.Footer>
    </Styles.ModalWrapper>
  );
};

export default SortingModal;
