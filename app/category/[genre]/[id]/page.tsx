'use client';

import { CATEGORY } from 'constants/category';
import Performance from 'features/category/performance/Performance';

interface PageProps {
  params: { id: string; genre: string };
}

const Header = new Map(CATEGORY.map(({ caption, route }) => [route, caption]));

const Page = ({ params }: PageProps) => {
  const { id, genre } = params;
  const title = Object.fromEntries(Header)[genre];

  return <Performance id={id} title={title} />;
};

export default Page;
