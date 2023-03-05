import React, { HTMLAttributes, ReactElement, useEffect } from 'react';

import ModalContainer from 'components/common/Modal/ModalContainer';
import useOutsideClick from 'hooks/useOutsideClick';
import { nullFn } from 'utils/function';

import * as Styles from './Modal.styles';

export type Pivot = 'top' | 'center' | 'bottom';

interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  close: () => void;
  canClose?: boolean;
  children: ReactElement;
  isOpen?: boolean;
  outSideClick?: () => void;
  pivot?: Pivot;
  mobilePivot?: Pivot;
}

function Modal({
  close,
  children,
  isOpen = false,
  canClose = true,
  outSideClick,
  pivot = 'center',
  mobilePivot = 'center',
}: ModalProps) {
  const handleClose = () => {
    outSideClick?.();
    close();
  };

  const ref = useOutsideClick<HTMLDivElement>({
    onClick: canClose ? handleClose : nullFn,
  });

  useEffect(() => {
    const $body = document.querySelector('body') as HTMLBodyElement;
    const overflow = $body.style.overflow;
    $body.style.overflow = 'hidden';
    return () => {
      $body.style.overflow = overflow;
    };
  }, []);

  return (
    <ModalContainer>
      <Styles.Overlay>
        <Styles.ModalWrap ref={ref} $pivot={pivot} $mobilePivot={mobilePivot}>
          <Styles.Contents>{React.cloneElement(children, { close, isOpen })}</Styles.Contents>
        </Styles.ModalWrap>
      </Styles.Overlay>
    </ModalContainer>
  );
}

export default Modal;
