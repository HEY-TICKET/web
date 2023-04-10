'use client';

import { HTMLAttributes } from 'react';

import styled from 'styled-components';

import CloseButton from 'components/common/Button/CloseButton';
import useCustomToast from 'hooks/useCustomToast';
import STYLES from 'styles/index';
import { copyClipboard } from 'utils/common';
import { nullFn } from 'utils/function';

interface ShareModalProps extends HTMLAttributes<HTMLElement> {
  close?: () => void;
}

const ShareModal = ({ close = nullFn }: ShareModalProps) => {
  const toast = useCustomToast();

  const copyLink = async () => {
    await copyClipboard(window.location.href, () => toast('링크를 복사했어요.'));
  };

  return (
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
