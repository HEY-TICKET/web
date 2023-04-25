'use client';

import { useSearchParams } from 'next/navigation';

import { CATEGORY } from 'constants/category';
import Performance from 'deprecated/features/category/performance/Performance';

const Header = new Map(CATEGORY.map(({ caption, route }) => [route, caption]));

const Index = () => {
  const id = useSearchParams().get('id');
  const genre = useSearchParams().get('genre');

  if (!id || !genre) return null;

  const title = Object.fromEntries(Header)[genre];

  return <Performance id={id} title={title} />;
};

export default Index;
