import { notFound } from 'next/navigation';

import { CATEGORY_LIST } from 'constants/Category/Category';
import Category from 'features/Category/Category';

type PageParams = {
  category: string;
};

type PageProps = {
  params: PageParams;
};

const Page = ({ params }: PageProps) => {
  console.log(params);
  const mainCategory = params.category;
  const isNotFound = !CATEGORY_LIST.map(({ param }) => param).some((item) => item === mainCategory);
  if (isNotFound) return notFound();

  return <Category />;
};

export default Page;
