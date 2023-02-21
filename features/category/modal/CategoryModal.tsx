import { CloseIcon } from 'styles/icons';
import * as Styles from './CategoryModal.styles';

interface CategoryModalProps {
  onClose?: () => void;
}

const CategoryModal = ({ onClose = () => void 0 }: CategoryModalProps) => {
  return (
    <Styles.ModalWrapper>
      <Styles.Header>
        <span>필터</span>
        <Styles.IconWrapper onClick={() => onClose()}>
          <CloseIcon />
        </Styles.IconWrapper>
      </Styles.Header>
      <Styles.Body></Styles.Body>
      <Styles.Footer>
        {/*resetIcon 초기화*/}
        {/*common Button*/}
      </Styles.Footer>
    </Styles.ModalWrapper>
  );
};

export default CategoryModal;
