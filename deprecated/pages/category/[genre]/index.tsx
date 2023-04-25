'use client';

import { useSearchParams } from 'next/navigation';

import Genre from 'deprecated/features/category/genre/Genre';

const Index = () => {
  const genre = useSearchParams().get('genre');

  if (!genre) return null;

  return <Genre genre={genre} />;
};

export default Index;
