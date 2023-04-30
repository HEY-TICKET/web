import Script from 'next/script';

import { CATEGORY } from 'constants/category';
import Performance from 'features/category/performance/Performance';

interface PageProps {
  params: { genre: string; id: string };
}

const Header = new Map(CATEGORY.map(({ caption, route }) => [route, caption]));

const Page = ({ params }: PageProps) => {
  const { id, genre } = params;

  if (!id || !genre) return null;

  const title = Object.fromEntries(Header)[genre];

  return (
    <>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        strategy={'afterInteractive'}
      />
      <Script
        src={'https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js'}
        integrity={process.env.NEXT_PUBLIC_KAKAO_SDK_INTEGRITY}
        crossOrigin={'anonymous'}
        strategy={'afterInteractive'}
      />
      <Performance id={id} title={title} />
    </>
  );
};

export default Page;
