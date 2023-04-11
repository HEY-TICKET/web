import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="Hey Ticket" key="title" />
          <meta
            name="description"
            content="원하는 공연을 선택해 티켓을 구매할 수 있는 플랫폼"
            key="description"
          />
          <meta property="og:url" content="https://next-ticket.vercel.app/" key="og_url" />
          <meta property="og:title" content="Hey Ticket" key="og_title" />
          <meta
            property="og:description"
            content="원하는 공연을 선택해 티켓을 구매할 수 있는 플랫폼"
            key="og_description"
          />
          {/*이미지 태그 설정 필요*/}
          {/*<meta property="og:image" content="" key="og_image" />*/}
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:site_name" content="Hey Ticket" />
          {/* <!-- Naver Map  --> */}
          <script
            type="text/javascript"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
            async={true}
          ></script>

          <script
            src={'https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js'}
            integrity={process.env.NEXT_PUBLIC_KAKAO_SDK_INTEGRITY}
            crossOrigin={'anonymous'}
            async={true}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
