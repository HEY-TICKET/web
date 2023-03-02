import { HTMLAttributes, MouseEvent } from 'react';

import { CloseIcon } from 'styles/icons';

import * as Styles from './Chip.styles';

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  active?: boolean;
  onClose?: () => void;
  onlyActive?: boolean;
}

const Chip = ({ text, active = false, onClose, onlyActive = false, ...restProps }: ChipProps) => {
  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose?.();
  };

  const isVisible = onlyActive ? active : true;

  return (
    <Styles.ChipWrapper $active={active} {...restProps}>
      <Styles.Chip $active={active}>{text}</Styles.Chip>
      {isVisible && (
        <Styles.CloseIconWrapper $active={active} onClick={handleClose}>
          <CloseIcon size={14} />
        </Styles.CloseIconWrapper>
      )}
    </Styles.ChipWrapper>
  );
};

export default Chip;
