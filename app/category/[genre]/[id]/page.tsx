'use client';

import PerformDetail from 'features/category/performDetail/PerformDetail';

interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  const { id } = params;
  return <PerformDetail id={id} />;
};

export default Page;
