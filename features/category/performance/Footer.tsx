import { useState } from 'react';

import styled from 'styled-components';

import Button from 'components/common/Button/Button';
import CloseButton from 'components/common/Button/CloseButton';
import useCustomToast from 'hooks/useCustomToast';
import useModal from 'hooks/useModal';
import { CouponIcon, HeartIcon, HeartLineIcon, ShareIcon } from 'styles/icons';
import STYLES from 'styles/index';
import { copyClipboard } from 'utils/common';

const Footer = () => {
  const [saved, setSaved] = useState(false);
  const { Modal, open, close } = useModal();
  const toast = useCustomToast();

  const clickSaveButton = () => {
    if (saved) {
      toast('찜이 해제되었어요.');
    } else {
      toast('이 공연을 찜했어요.');
    }
    setSaved((prev) => !prev);
  };

  const copyLink = async () => {
    await copyClipboard(window.location.href, () => toast('링크를 복사했어요.'));
  };

  return (
    <Wrapper>
      <ButtonsContainer>
        <IconButton onClick={open}>
          <ShareIcon />
        </IconButton>
        <IconButton onClick={clickSaveButton}>
          {saved ? <HeartIcon /> : <HeartLineIcon />}
        </IconButton>
      </ButtonsContainer>
      <Button>
        <ButtonContentsWrapper>
          <IconWrapper>
            <CouponIcon />
          </IconWrapper>
          <span>예매하러 가기</span>
        </ButtonContentsWrapper>
      </Button>
      {/* desc: 모달 */}
      <Modal>
        <ModalWrapper>
          <Header>
            <span>공유하기</span>
            <CloseButton onClick={close} />
          </Header>
          <Body>
            <Content>카카오톡 공유</Content>
            <Content onClick={copyLink}>링크 복사</Content>
          </Body>
        </ModalWrapper>
      </Modal>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  column-gap: 10px;
  width: 100%;
  padding: 8px 16px;
`;

const ButtonContentsWrapper = styled.div`
  display: flex;
  column-gap: 6px;
  align-items: center;
`;

const IconWrapper = styled.div`
  & > svg {
    ${STYLES.iconFilter.white};
  }
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 6px;
  background-color: ${STYLES.color.gray150};
  border-radius: 50%;

  & > svg {
    ${STYLES.iconFilter.gray850};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

const ModalWrapper = styled.div`
  width: 360px;
`;

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 24px 20px 12px;

  & > span {
    color: ${STYLES.color.gray900};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
  }
`;

const Body = styled.section`
  padding: 0 20px 16px;
`;

const Content = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 48px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;
