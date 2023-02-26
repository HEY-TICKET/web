import React, { HTMLAttributes, ReactElement, useEffect } from 'react';

import ModalContainer from 'components/common/Modal/ModalContainer';
import useOutsideClick from 'hooks/useOutsideClick';

import * as Styles from './Modal.styles';

interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  onClose: () => void;
  canClose?: boolean;
  children: ReactElement;
}

function Modal({ onClose, children, canClose = true }: ModalProps) {
  const ref = useOutsideClick<HTMLDivElement>({ onClick: canClose ? onClose : () => void 0 });

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
        <Styles.ModalWrap ref={ref}>
          <Styles.Contents>{React.cloneElement(children, { onClose })}</Styles.Contents>
        </Styles.ModalWrap>
      </Styles.Overlay>
    </ModalContainer>
  );
}

export default Modal;
