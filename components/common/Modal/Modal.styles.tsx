'use client';

import styled, { css } from 'styled-components';

import { Pivot } from './Modal';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;

const pivotCss = (pivot: Pivot) => {
  switch (pivot) {
    case 'top':
      return css`
        border-radius: 0 0 16px 16px;
        top: 0;
        bottom: unset;
        left: 50%;
        transform: translate(-50%, 0%);
      `;

    case 'center':
      return css`
        border-radius: 16px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `;

    case 'bottom':
      return css`
        border-radius: 16px 16px 0 0;
        top: unset;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0%);
      `;

    default:
      break;
  }
};

export const ModalWrap = styled.div<{ $pivot: Pivot; $mobilePivot: Pivot }>`
  width: fit-content;
  height: fit-content;
  background-color: #fff;
  position: absolute;

  ${({ theme, $pivot, $mobilePivot }) => css`
    ${pivotCss($pivot)}
    ${theme.MEDIA.mobile360} {
      ${pivotCss($mobilePivot)}
    }
  `}
`;

export const Contents = styled.div`
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 60px;
    width: 300px;
  }
`;
