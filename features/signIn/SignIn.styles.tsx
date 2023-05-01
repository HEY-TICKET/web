'use client';

import styled from 'styled-components';

import STYLES from 'styles/index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 220px;

  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 640px;
  height: 56px;
  padding: 14px 16px;
  margin: auto;

  & > svg {
    transform: rotate(-180deg);
    cursor: pointer;
  }
`;

export const SignInFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 36px;
  width: 328px;
`;

export const FormContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const KakaoSignInFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 18px;
  width: 328px;
`;

export const FindAccountLink = styled.span`
  color: ${STYLES.color.gray500};
  text-decoration: underline;
`;
