'use client';

import { ReactNode } from 'react';

import Toast from 'components/common/Toast/Toaster';
import Layout from 'components/layout/Layout';
import StyledComponentsRegistry from 'lib/register';
import ReactQueryProvider from 'Provider/QueryClientProvider';
import ThemeProvider from 'Provider/ThemeProvider';
import GlobalStyles from 'styles/GlobalStyles';

import 'utils/prototype'; /** @note 해당 파일에 정의되어 있는 함수를 모든 페이지에서 사용하기 위해 import가 필요합니다. */

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ThemeProvider>
            <StyledComponentsRegistry>
              <GlobalStyles />
              <Layout>{children}</Layout>
              <div id="modal"></div>
              <Toast />
            </StyledComponentsRegistry>
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
