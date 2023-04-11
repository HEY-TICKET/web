import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Toast from 'components/common/Toast/Toaster';
import Layout from 'components/layout/Layout';
import ThemeProvider from 'Provider/ThemeProvider';
import GlobalStyles from 'styles/GlobalStyles';

import 'utils/prototype';
/** @note 해당 파일에 정의되어 있는 함수를 모든 페이지에서 사용하기 위해 import가 필요합니다. */

declare global {
  interface Window {
    Kakao: any;
    naver: any;
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

  useEffect(() => {
    const Kakao = window.Kakao;
    if (Kakao && !Kakao.isInitialized()) {
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);
      console.log('Kakao.isInitialized() => ', Kakao.isInitialized());
    }
  }, []);

  return (
    <>
      <Head>
        {/*viewport 설정*/}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
      </Head>
      <QueryClientProvider client={client}>
        <ThemeProvider>
          <>
            <GlobalStyles />
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <ReactQueryDevtools />
            <div id="modal"></div>
            <Toast />
          </>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
