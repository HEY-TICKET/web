import { HTMLAttributes, MouseEvent } from 'react';

import { CloseIcon } from 'styles/icons';

import * as Styles from './Chip.styles';

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  active?: boolean;
  onClose?: () => void;
  closable?: boolean;
}

const Chip = ({ text, active = false, onClose, closable, ...restProps }: ChipProps) => {
  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose?.();
  };

  return (
    <Styles.ChipWrapper $active={active} {...restProps}>
      <Styles.Chip $active={active}>{text}</Styles.Chip>
      {closable && (
        <Styles.CloseIconWrapper $active={active} onClick={handleClose}>
          <CloseIcon size={14} />
        </Styles.CloseIconWrapper>
      )}
    </Styles.ChipWrapper>
  );
};

export default Chip;
