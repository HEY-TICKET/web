import React from 'react';
import 'styles/globals.css';

import Head from 'next/head';

import GlobalLayout from 'components/Layouts/GlobalLayout';
import ReactQueryProvider from 'src/utils/ReactQueryProvider';

// TODO: 메타데이터 설정
// import type { Metadata } from 'next';
//
// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to Next.js',
// };

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Hey Ticket ✨</title>
      </Head>
      <body>
        <ReactQueryProvider>
          <GlobalLayout>{children}</GlobalLayout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
