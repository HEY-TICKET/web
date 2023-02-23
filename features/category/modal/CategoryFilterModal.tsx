import { CloseIcon, ResetIcon } from 'styles/icons';
import * as Styles from './CategoryFilterModal.styles';
import Button from 'components/common/Button/Button';
import useTab from 'components/common/Tab/TabMenu';
import Region from 'features/category/genre/filter/region/Region';
import Schedule from 'features/category/genre/filter/schedule/Schedule';
import Status from '../genre/filter/status/Status';
import Price from '../genre/filter/price/Price';

interface CategoryModalProps {
  onClose?: () => void;
}

const CategoryFilterModal = ({ onClose = () => void 0 }: CategoryModalProps) => {
  const TabMenu = useTab();

  return (
    <Styles.ModalWrapper>
      <Styles.Header>
        <span>필터</span>
        <Styles.CloseIconWrapper onClick={() => onClose()}>
          <CloseIcon />
        </Styles.CloseIconWrapper>
      </Styles.Header>
      <Styles.Body>
        <TabMenu>
          <TabMenu.Tab>
            <div>지역</div>
            <div>공연일</div>
            <div>진행 상태</div>
            <div>예매 가격</div>
          </TabMenu.Tab>
          <TabMenu.Contents>
            <Region />
            <Schedule />
            <Status />
            <Price />
          </TabMenu.Contents>
        </TabMenu>
      </Styles.Body>
      <Styles.Footer>
        <Styles.ResetIconWrapper>
          <ResetIcon size={24} />
          <span>초기화</span>
        </Styles.ResetIconWrapper>
        <Button>적용</Button>
      </Styles.Footer>
    </Styles.ModalWrapper>
  );
};

export default CategoryFilterModal;
