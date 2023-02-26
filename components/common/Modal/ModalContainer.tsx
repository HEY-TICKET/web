import React, { ReactNode } from 'react';

import { createPortal } from 'react-dom';

type ModalContainerProps = {
  children: ReactNode;
};

const ModalContainer = ({ children }: ModalContainerProps) => {
  return createPortal(<>{children}</>, document.getElementById('modal') as HTMLDivElement);
};

export default ModalContainer;
