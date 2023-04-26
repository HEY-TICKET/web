'use client';

import { useRouter } from 'next/navigation';

import FakeInput from 'deprecated/components/Input/FakeInput';
import Footer from 'deprecated/components/layout/Footer';
import { CATEGORY } from 'deprecated/constants/category';
import { ROUTES } from 'deprecated/constants/routes';
import * as Styles from 'deprecated/features/category/Category.styles';
import { ArrowRight } from 'deprecated/styles/icons';

const categoryList = ['공연', '전시', '스포츠'];

const Category = () => {
  const { push } = useRouter();

  const clickFakeInput = () => push('/search');

  const clickSubCategory = (route: string) => {
    push(`${ROUTES.category}/${route}`);
  };

  return (
    <Styles.CategoryWrapper>
      <Styles.InputWrapper>
        <FakeInput onClick={clickFakeInput} hasIcon placeholder={'공연명, 출연진, 아티스트 검색'} />
      </Styles.InputWrapper>

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
              <p>{(1234).addComma()}</p>
            </Styles.SubCategoryItem>
            <ArrowRight size={24} />
          </Styles.SubCategoryItemWrapper>
        ))}
      </Styles.SubCategory>
      <Footer pathname={'/category'} />
    </Styles.CategoryWrapper>
  );
};

export default Category;
