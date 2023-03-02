'use client';

import { ReactElement, useState } from 'react';

import Modal from 'components/common/Modal/Modal';

export default function useModal(onOpen?: () => void, onClose?: () => void) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
    onOpen?.();
  };
  const close = () => {
    setIsOpen(false);
    onClose?.();
  };

  return {
    Modal: isOpen
      ? ({ children, canClose }: { children: ReactElement; canClose?: boolean }) => (
          <Modal close={close} isOpen={isOpen} canClose={canClose}>
            {children}
          </Modal>
        )
      : () => null,
    open,
    close,
    isOpen,
  };
}
