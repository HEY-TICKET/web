import { FormProvider, UseFormReturn } from 'react-hook-form';

import Button from 'components/common/Button/Button';
import List from 'components/common/List/List';
import { CloseIcon } from 'styles/icons';

import * as Styles from './SortingModal.styles';

interface CategoryModalProps {
  onClose?: () => void;
  methods: UseFormReturn<SortingModalFormValues>;
}

export type SortingModalFormValues = {
  sorting: string;
};

export const SORTING_MODAL_DEFAULT_VALUES = {
  sorting: '예매순',
};

const SortingModal = ({ onClose = () => void 0, methods }: CategoryModalProps) => {
  const list = ['최신순', '예매순', '조회수순'];

  const { handleSubmit } = methods;

  const submit = (data: SortingModalFormValues) => {
    console.log(data);
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>
        <Styles.ModalWrapper>
          <Styles.Header>
            <span>정렬</span>
            <Styles.CloseIconWrapper onClick={() => onClose()}>
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
    </FormProvider>
  );
};

export default SortingModal;
