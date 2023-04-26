import { CategoryListItem, SubCategoryListItem } from 'constants/Category/types';

export const CATEGORY_LIST: CategoryListItem[] = [
  { title: '공연', param: 'performance' },
  { title: '전시', param: 'exhibition' },
  { title: '스포츠', param: 'sport' },
];

export const SUB_CATEGORY_PERFORMANCE_LIST: SubCategoryListItem[] = [
  { title: '콘서트', count: 100, param: 'concert' },
  { title: '뮤지컬', count: 100, param: 'musical' },
  { title: '연극', count: 100, param: 'theater' },
];

export const SUB_CATEGORY_EXHIBITION_LIST: SubCategoryListItem[] = [
  { title: '전시/축제', count: 100, param: 'test1' },
  { title: '레저/체험', count: 100, param: 'test2' },
];

export const SUB_CATEGORY_SPORT_LIST: SubCategoryListItem[] = [
  { title: '축구', count: 100, param: 'soccer' },
  { title: '야구', count: 100, param: 'baseball' },
  { title: '농구', count: 100, param: 'basketball' },
];

export const SUB_CONTENTS_BY_MAIN_CATEGORY: {
  [K in (typeof CATEGORY_LIST)[number]['param']]: SubCategoryListItem[];
} = {
  performance: SUB_CATEGORY_PERFORMANCE_LIST,
  exhibition: SUB_CATEGORY_EXHIBITION_LIST,
  sport: SUB_CATEGORY_SPORT_LIST,
};
