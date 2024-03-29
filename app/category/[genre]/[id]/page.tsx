import Script from 'next/script';

import Performance from 'features/category/performance/Performance';
import { GenreTypes } from 'types/performance';

interface PageProps {
  params: { genre: GenreTypes; id: string };
}

const Page = ({ params }: PageProps) => {
  const { id, genre } = params;

  if (!id || !genre) return null;

  return (
    <>
      <Performance id={id} />
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
