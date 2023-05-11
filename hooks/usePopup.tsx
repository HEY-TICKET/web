'use client';

import styled from 'styled-components';

import Button from 'components/common/Button/Button';
import useModal from 'hooks/useModal';
import STYLES from 'styles/index';

type Props = {
  title: string | JSX.Element;
  onCancel?: () => void;
  onSubmit?: () => void;
  cancelText?: string;
  submitText?: string;
};

const usePopup = ({
  title,
  onCancel,
  onSubmit,
  cancelText = '취소',
  submitText = '확인',
}: Props) => {
  const { Modal, open, close, isOpen } = useModal();

  const cancel = () => {
    onCancel?.();
    close();
  };
  const submit = () => {
    onSubmit?.();
    close();
  };

  const Popup = () => (
    <Modal canClose={false} close={close} isOpen={isOpen}>
      <>
        <Container>
          <Title>{title}</Title>
          <ButtonWrapper>
            <Button theme={'white'} onClick={cancel}>
              {cancelText}
            </Button>
            <Button onClick={submit}>{submitText}</Button>
          </ButtonWrapper>
        </Container>
      </>
    </Modal>
  );

  return { Popup, open, close, isOpen };
};

export default usePopup;

const Container = styled.div`
  width: 270px;
  padding-top: 16px;
  border-radius: 12px;
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  padding: 20px 16px;

  color: ${STYLES.color.gray750};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 12px;

  height: 62px;
`;
