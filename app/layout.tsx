import React from 'react';

import localFont from 'next/font/local';

import Toast from 'components/common/Toast/Toaster';
import Layout from 'components/layout/Layout';
import StyledComponentsRegistry from 'lib/register';
import ReactQueryProvider from 'src/ReactQueryProvider';
import GlobalStyles from 'styles/GlobalStyles';

// TODO: 메타데이터 설정
// import type { Metadata } from 'next';
//
// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to Next.js',
// };

const Pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Pretendard.className}>
      <body>
        <ReactQueryProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <Layout>{children}</Layout>
            <div id="modal"></div>
            <Toast />
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
