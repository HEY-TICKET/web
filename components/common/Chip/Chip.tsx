import * as Styles from './Chip.styles';
import { CloseIcon } from 'styles/icons';

interface ChipProps {
  text: string;
}

const Chip = ({ text }: ChipProps) => {
  return (
    <Styles.ChipWrapper>
      <Styles.Chip>{text}</Styles.Chip>
      <CloseIcon size={14} />
    </Styles.ChipWrapper>
  );
};

export default Chip;
