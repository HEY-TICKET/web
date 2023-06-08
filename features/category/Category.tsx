'use client';

import { useRouter } from 'next/navigation';

import { PERFORMANCE_GENRE_MAP } from 'constants/new/performance';
import { ROUTES } from 'constants/routes';
import * as Styles from 'features/category/Category.styles';
import { useGetCountByGenreQuery } from 'reactQuery/performance';
import { ArrowRight } from 'styles/icons';
import { addComma } from 'utils/number';

const categoryList = ['공연', '전시', '스포츠'];

const Category = () => {
  const { push } = useRouter();

  const { data } = useGetCountByGenreQuery();

  const clickSubCategory = (route: string) => {
    push(`${ROUTES.category}/${route}`);
  };

  return (
    <Styles.CategoryWrapper>
      <Styles.Category>
        {categoryList.map((caption, index) => (
          <Styles.CategoryItem key={caption} $active={index === 0}>
            {caption}
          </Styles.CategoryItem>
        ))}
      </Styles.Category>
      <Styles.SubCategory>
        {(data ?? []).map(({ genre, count }) => (
          <Styles.SubCategoryItemWrapper key={genre} onClick={() => clickSubCategory(genre)}>
            <Styles.SubCategoryItem>
              <span>{PERFORMANCE_GENRE_MAP.find(({ value }) => value === genre)?.caption}</span>
              <p>{addComma(count)}</p>
            </Styles.SubCategoryItem>
            <ArrowRight size={24} />
          </Styles.SubCategoryItemWrapper>
        ))}
      </Styles.SubCategory>
    </Styles.CategoryWrapper>
  );
};

export default Category;
