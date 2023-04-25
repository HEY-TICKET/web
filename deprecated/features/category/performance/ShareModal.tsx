'use client';

import { HTMLAttributes } from 'react';

import styled from 'styled-components';

import { PerformancesResponses } from 'apis/performance/type';
import { GetPlaceReturnValue } from 'apis/place/type';
import CloseButton from 'deprecated/components/common/Button/CloseButton';
import STYLES from 'deprecated/styles/index';
import useCustomToast from 'hooks/useCustomToast';
import { copyClipboard } from 'utils/common';
import { nullFn } from 'utils/function';

interface ShareModalProps extends HTMLAttributes<HTMLElement> {
  close?: () => void;
  performance?: PerformancesResponses;
  place?: GetPlaceReturnValue;
}

declare global {
  interface Window {
    Kakao: any;
    naver: any;
  }
}

const ShareModal = ({ close = nullFn, performance, place }: ShareModalProps) => {
  const toast = useCustomToast();

  if (!performance || !place) return null;

  const { title, poster } = performance;
  const { latitude, longitude } = place;

  const copyLink = async () => {
    await copyClipboard(window.location.href, () => toast('링크를 복사했어요.'));
  };

  const sendKakaoMessage = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '이 공연 어때요? 👀',
        description: title,
        imageUrl: poster,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '공연정보',
          link: {
            webUrl: window.location.href,
            mobileWebUrl: window.location.href,
            androidExecutionParams: '',
            iosExecutionParams: '',
          },
        },
        {
          title: '공연장 위치보기',
          link: {
            webUrl: `https://map.naver.com/v5/?c=${longitude},${latitude},15,0,0,0,dh`,
            mobileWebUrl: `https://map.naver.com/v5/?c=${longitude},${latitude},15,0,0,0,dh`,
            androidExecutionParams: '',
            iosExecutionParams: '',
          },
        },
      ],
      callback: close,
    });
  };

  return (
    <ModalWrapper>
      <Header>
        <span>공유하기</span>
        <CloseButton onClick={close} />
      </Header>
      <Body>
        <Content onClick={sendKakaoMessage}>카카오톡 공유</Content>
        <Content onClick={copyLink}>링크 복사</Content>
      </Body>
    </ModalWrapper>
  );
};

export default ShareModal;

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
