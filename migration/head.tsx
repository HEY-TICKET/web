import Script from 'next/script';

export default function Head() {
  return (
    <>
      <title>Hey Ticket</title>
      {/*https http 간 api통신이 가능하도록 하는 메타태그*/}
      {/*<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />*/}
      <meta name="title" content="Hey Ticket" key="title" />
      <meta
        name="description"
        content="원하는 공연을 선택해 티켓을 구매할 수 있는 플랫폼"
        key="description"
      />
      <meta property="og:url" content="https://hey-ticket.vercel.app/" key="og_url" />
      <meta property="og:title" content="Hey Ticket" key="og_title" />
      <meta
        property="og:description"
        content="원하는 공연을 선택해 티켓을 구매할 수 있는 플랫폼"
        key="og_description"
      />
      {/*이미지 태그 설정 필요*/}
      {/*<meta property="og:image" content="" key="og_image" />*/}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content="Hey Ticket" />
      {/*viewport 설정*/}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />

      {/* <!-- Naver Map  --> */}
      <Script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
      ></Script>

      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js"
        integrity="sha384-dpu02ieKC6NUeKFoGMOKz6102CLEWi9+5RQjWSV0ikYSFFd8M3Wp2reIcquJOemx"
        crossOrigin={'anonymous'}
      ></Script>
    </>
  );
}