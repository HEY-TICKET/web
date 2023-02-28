import { FormProvider, UseFormReturn } from 'react-hook-form';

import Button from 'components/common/Button/Button';
import { DEFAULT_VALUES, FormValues } from 'features/category/genre/Genre';
import { CloseIcon, ResetIcon } from 'styles/icons';

import * as Styles from './CategoryFilterModal.styles';

interface CategoryModalProps {
  onClose?: () => void;
  methods: UseFormReturn<FormValues>;
  TabMenu: () => JSX.Element;
}

const CategoryFilterModal = ({ onClose = () => void 0, methods, TabMenu }: CategoryModalProps) => {
  const {
    handleSubmit,
    reset,
    formState: { isDirty },
  } = methods;

  const submit = (data: FormValues) => {
    console.log(data);
  };

  const resetFormValue = () => {
    reset(DEFAULT_VALUES);
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
