'use client';

import { HTMLAttributes } from 'react';

type PageProps = HTMLAttributes<HTMLElement>;

const Page = ({ children }: PageProps) => {
  return (
    <div>
      <div>search</div>
      {children}
    </div>
  );
};

export default Page;
