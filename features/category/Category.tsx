'use client';

import { useRouter } from 'next/navigation';

import { CATEGORY } from 'constants/category';
import { ROUTES } from 'constants/routes';
import * as Styles from 'features/category/Category.styles';
import { ArrowRight } from 'styles/icons';

const categoryList = ['공연', '전시', '스포츠'];

const Category = () => {
  const { push } = useRouter();

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
        {CATEGORY.map(({ caption, route }) => (
          <Styles.SubCategoryItemWrapper key={caption} onClick={() => clickSubCategory(route)}>
            <Styles.SubCategoryItem>
              <span>{caption}</span>
              {/*<p>{(1234).addComma()}</p>*/}
            </Styles.SubCategoryItem>
            <ArrowRight size={24} />
          </Styles.SubCategoryItemWrapper>
        ))}
      </Styles.SubCategory>
    </Styles.CategoryWrapper>
  );
};

export default Category;
