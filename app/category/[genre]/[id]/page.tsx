import Script from 'next/script';

import { GENRE_LIST_MAP } from 'constants/performance/common';
import Performance from 'features/category/performance/Performance';
import { GenreTypes } from 'types/performance';

interface PageProps {
  params: { genre: GenreTypes; id: string };
}

const Header = new Map(GENRE_LIST_MAP.map(({ caption, value }) => [value, caption]));

const Page = ({ params }: PageProps) => {
  const { id, genre } = params;

  if (!id || !genre) return null;

  const title = Object.fromEntries(Header)[genre];

  return (
    <>
      <Performance id={id} title={title} />
      <Script src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=1uztqd2po6`} />
      <Script
        src={'https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js'}
        integrity={process.env.NEXT_PUBLIC_KAKAO_SDK_INTEGRITY}
        crossOrigin={'anonymous'}
      />
    </>
  );
};

export default Page;
