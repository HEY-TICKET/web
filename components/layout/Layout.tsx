'use client';

import { HTMLAttributes } from 'react';

import Footer from 'components/layout/Footer/Footer';
import * as Styles from 'components/layout/RootLayout.styles';
import GNB from 'features/index/GNB';

type LayoutProps = HTMLAttributes<HTMLDivElement>;

const Layout = ({ children }: LayoutProps) => {
  // TODO : 카카오 초기화, Script 삽입 (Kakao SDK appDirectory 미지원 (?) )

  //   useEffect(() => {
  //     const Kakao = window.Kakao;
  //     if (Kakao && !Kakao.isInitialized()) {
  //       if (!process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY) return;
  //       Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
  //       console.log('Kakao.isInitialized() => ', Kakao.isInitialized());
  //     }
  //   }, []);

  //           <script
  //             type="text/javascript"
  //             src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
  //             async={true}
  //           ></script>
  //
  //           <script
  //             src={'https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js'}
  //             integrity={process.env.NEXT_PUBLIC_KAKAO_SDK_INTEGRITY}
  //             crossOrigin={'anonymous'}
  //             async={true}
  //           ></script>

  return (
    <Styles.Wrapper>
      <GNB />
      <Styles.Content>{children}</Styles.Content>
      <Footer />
    </Styles.Wrapper>
  );
};

export default Layout;
