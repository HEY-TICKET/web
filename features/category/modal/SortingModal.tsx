import { CloseIcon } from 'styles/icons';
import * as Styles from './SortingModal.styles';
import Button from 'components/common/Button/Button';
import List from 'components/common/List/List';

interface CategoryModalProps {
  onClose?: () => void;
}

const SortingModal = ({ onClose = () => void 0 }: CategoryModalProps) => {
  const list = ['최신순', '예매순', '조회수순', '기대평순'];

  return (
    <Styles.ModalWrapper>
      <Styles.Header>
        <span>정렬</span>
        <Styles.CloseIconWrapper onClick={() => onClose()}>
          <CloseIcon />
        </Styles.CloseIconWrapper>
      </Styles.Header>
      <Styles.Body>
        <List list={list} />
      </Styles.Body>
      <Styles.Footer>
        <Button>적용</Button>
      </Styles.Footer>
    </Styles.ModalWrapper>
  );
};

export default SortingModal;