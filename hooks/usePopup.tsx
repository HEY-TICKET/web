'use client';

import styled, { css } from 'styled-components';

import Button from 'components/common/Button/Button';
import useModal from 'hooks/useModal';

type Props = {
  title: string;
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
    console.log('close!');
    close();
  };
  const submit = () => {
    onSubmit?.();
    close();
  };

  const Popup = () => (
    <Modal canClose={false}>
      <Container>
        <Title>{title}</Title>
        <ButtonWrapper>
          <Button colorTheme={'lightGray'} width={119} height={38} onClick={cancel}>
            {cancelText}
          </Button>
          <Button width={119} height={38} onClick={submit}>
            {submitText}
          </Button>
        </ButtonWrapper>
      </Container>
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

  padding: 20px 16px;

  ${({ theme }) =>
    css`
      color: ${theme.COLOR.gray750};
    `}
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

  height: 62px;
`;