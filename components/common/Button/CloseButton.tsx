import styled from 'styled-components';

import { CloseIcon } from 'styles/icons';
import STYLES from 'styles/index';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <CloseIconWrapper onClick={onClick}>
      <CloseIcon size={24} />
    </CloseIconWrapper>
  );
};

export default CloseButton;

const CloseIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & > svg {
    ${STYLES.iconFilter.gray500};
  }
`;
