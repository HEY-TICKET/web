'use client';

import { useState } from 'react';

import { useParams } from 'next/navigation';
import styled from 'styled-components';

import Button from 'components/common/Button/Button';
import ShareModal from 'features/category/performance/ShareModal';
import useCustomToast from 'hooks/useCustomToast';
import useModal from 'hooks/useModal';
import { usePerformanceByIdQuery } from 'reactQuery/performance';
import { CouponIcon, HeartIcon, HeartLineIcon, ShareIcon } from 'styles/icons';
import STYLES from 'styles/index';
import { handleOpenNewTab } from 'utils/url';

const Footer = () => {
  const params = useParams();
  const { id } = params;

  const [saved, setSaved] = useState(false);
  const { Modal, open } = useModal();
  const toast = useCustomToast();

  const { data: performance } = usePerformanceByIdQuery({ id: id }, { enabled: !!id });

  const clickSaveButton = () => {
    if (saved) {
      toast('찜이 해제되었어요.');
    } else {
      toast('이 공연을 찜했어요.');
    }
    setSaved((prev) => !prev);
  };

  const search = () => {
    const encodeString = encodeURI(
      `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${performance?.genre}, ${performance?.title}`,
    );
    handleOpenNewTab(encodeString);
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
      <Button onClick={search}>
        <ButtonContentsWrapper>
          <IconWrapper>
            <CouponIcon />
          </IconWrapper>
          <span>예매하러 가기</span>
        </ButtonContentsWrapper>
      </Button>
      {/* desc: 모달 */}
      <Modal>
        <ShareModal performance={performance} />
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
