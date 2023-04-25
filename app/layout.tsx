import React from 'react';

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
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
