type Category = {
  caption: string;
  route: string;
};

// TODO : perform/genre 에서 정리 필요

/**
 * FIXME : dynamic segments를 사용하면 api에러가 없는데 category/[genre]/page.tsx로
 *  설정 후 동적으로 경로를 설정하고 api 호출하면 404 not found 발생.
 */
export const CATEGORY: Category[] = [
  { caption: '콘서트', route: 'concert' },
  { caption: '뮤지컬', route: 'musical' },
  { caption: '연극', route: 'theater' },
];
