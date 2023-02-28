import { FormProvider, UseFormReturn } from 'react-hook-form';

import Button from 'components/common/Button/Button';
import { CloseIcon, ResetIcon } from 'styles/icons';
import { nullFn } from 'utils/function';

import * as Styles from './CategoryFilterModal.styles';

interface CategoryModalProps {
  onClose?: () => void;
  onSubmit?: (data: FilterModalFormValues) => void;
  methods: UseFormReturn<FilterModalFormValues>;
  TabMenu: () => JSX.Element;
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
  onClose = nullFn,
  onSubmit,
  methods,
  TabMenu,
}: CategoryModalProps) => {
  const {
    handleSubmit,
    reset,
    formState: { isDirty },
  } = methods;

  const submit = (data: FilterModalFormValues) => {
    onSubmit?.(data);
    onClose();
  };

  const resetFormValue = () => {
    reset(FILTER_MODAL_DEFAULT_VALUES);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>
        <Styles.ModalWrapper>
          <Styles.Header>
            <span>필터</span>
            <Styles.CloseIconWrapper onClick={() => onClose()}>
              <CloseIcon />
            </Styles.CloseIconWrapper>
          </Styles.Header>
          <Styles.Body>
            <TabMenu />
          </Styles.Body>
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
