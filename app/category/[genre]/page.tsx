'use client';

import Genre from 'features/category/genre/Genre';

interface PageProps {
  params: { genre: string };
}

const Page = ({ params }: PageProps) => {
  const { genre } = params;

  return <Genre genre={genre} />;
};

export default Page;
