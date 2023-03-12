'use client';

import { CATEGORY } from 'constants/category';
import Genre from 'features/category/genre/Genre';

interface PageProps {
  params: { genre: string };
}

const Header = new Map(CATEGORY.map(({ caption, route }) => [route, caption]));

const Page = ({ params }: PageProps) => {
  const { genre } = params;

  const title = Object.fromEntries(Header)[genre];
  return <Genre title={title} />;
};

export default Page;
