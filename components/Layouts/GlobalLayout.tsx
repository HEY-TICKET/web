'use client';

import { HTMLAttributes } from 'react';

import Script from 'next/script';

type GlobalLayoutProps = HTMLAttributes<HTMLElement>;

/**
 * @description
 * GNB, Portal 같은 전역적으로 사용되는 컴포넌트를 렌더링 하는 레이아웃
 */

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <>
      {/* Desc: Naver Map SDK Script */}
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
      />
      {/* Desc: Kakao API SDK Script */}
      <Script
        src={'https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js'}
        integrity={process.env.NEXT_PUBLIC_KAKAO_SDK_INTEGRITY}
        crossOrigin={'anonymous'}
      />
      {/* TODO 모달, 토스트 메시지 portal 구현 */}
      {/*<div id="modal"></div>*/}
      {/*<Toast />*/}
      {children}
    </>
  );
};

export default GlobalLayout;
