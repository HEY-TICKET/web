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
  mobilePivot?: Pivot;
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
      ? ({ children, canClose, outSideClick, pivot, mobilePivot }: ModalProps) => (
          <Modal
            close={close}
            isOpen={isOpen}
            canClose={canClose}
            outSideClick={outSideClick}
            pivot={pivot}
            mobilePivot={mobilePivot}
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
