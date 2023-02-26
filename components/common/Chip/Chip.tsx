import { HTMLAttributes } from 'react';

import { CloseIcon } from 'styles/icons';

import * as Styles from './Chip.styles';

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  active?: boolean;
}

const Chip = ({ text, active = false, ...restProps }: ChipProps) => {
  return (
    <Styles.ChipWrapper $active={active} {...restProps}>
      <Styles.Chip $active={active}>{text}</Styles.Chip>
      {active && <CloseIcon size={14} />}
    </Styles.ChipWrapper>
  );
};

export default Chip;
