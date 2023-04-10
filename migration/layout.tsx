'use client';

import { ReactNode, useEffect } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Toast from 'components/common/Toast/Toaster';
import Layout from 'components/layout/Layout';
import StyledComponentsRegistry from 'lib/register';
import ThemeProvider from 'Provider/ThemeProvider';
import GlobalStyles from 'styles/GlobalStyles';

import 'utils/prototype';
/** @note 해당 파일에 정의되어 있는 함수를 모든 페이지에서 사용하기 위해 import가 필요합니다. */

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode;
}) {
  const client = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

  useEffect(() => {
    const Kakao = window.Kakao;

    if (Kakao) {
      // SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해야 합니다.
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY);

      // SDK 초기화 여부를 판단합니다.
      console.log(Kakao.isInitialized());
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={client}>
          <ThemeProvider>
            <StyledComponentsRegistry>
              <GlobalStyles />
              <Layout>{children}</Layout>
              <ReactQueryDevtools />
              <div id="modal"></div>
              <Toast />
            </StyledComponentsRegistry>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
