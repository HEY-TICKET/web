'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { CATEGORY_LIST, SUB_CONTENTS_BY_MAIN_CATEGORY } from 'constants/Category/Category';
import { CategoryListItem, SubCategoryListItem } from 'constants/Category/types';

const Category = () => {
  const pathname = usePathname();
  const params = useParams();

  return (
    <div>
      <Category.LNB items={CATEGORY_LIST} category={params.category} />
      <Category.SubCategory
        items={SUB_CONTENTS_BY_MAIN_CATEGORY[params.category]}
        pathname={pathname}
      />
    </div>
  );
};

export default Category;

Category.LNB = ({ items, category }: { items: CategoryListItem[]; category: string | null }) => {
  return (
    <ul className={'flex gap-x-5 p-4 text-xl font-bold'}>
      {items.map(({ title, param }, idx) => (
        <Link key={idx} href={`/${param}`}>
          <li className={category === param ? '' : 'text-gray-400'}>{title}</li>
        </Link>
      ))}
    </ul>
  );
};

Category.SubCategory = ({
  items,
  pathname,
}: {
  items: SubCategoryListItem[];
  pathname: string | null;
}) => {
  return (
    <ul className={'flex flex-col'}>
      {items.map(({ title, count, param }, idx) => (
        <Link key={idx} href={`${pathname}/${param}`}>
          <li className={'flex items-center gap-x-1 px-4 py-3 hover:bg-gray-100 cursor-pointer'}>
            <span className={'text-base font-medium'}>{title}</span>
            <p className={'text-md text-gray-300'}>{count}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};
