'use client';

import { ReactNode, useState } from 'react';

import Modal, { Pivot } from 'components/common/Modal/Modal';

export type ModalProps = {
  close?: () => void;
  isOpen?: boolean;
  children: ReactNode;
  canClose?: boolean;
  outSideClick?: () => void;
  pivot?: Pivot;
};

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
      ? ({ children, canClose, outSideClick, pivot }: ModalProps) => (
          <Modal
            close={close}
            isOpen={isOpen}
            canClose={canClose}
            outSideClick={outSideClick}
            pivot={pivot}
          >
            {children}
          </Modal>
        )
      : () => null,
    open,
    close,
    isOpen,
  };
}
