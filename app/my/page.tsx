import { redirect } from 'next/navigation';

import My from 'features/my/My';
// import { cookies } from 'next/headers';
// import { setCookieRefreshToken } from 'app/actions';
// import axios from 'axios/index';

const Page = () => {
  // const onSilentRefresh = async (email: string) => {
  //   const email = localStorage.getItem('email');
  //   const cookie = cookies().get('refreshToken');
  //   if (cookie && email) {
  //     const { value } = cookie;
  //     try {
  //       const res = await refreshToken({ refreshToken: value, email });
  //       const { grantType, accessToken, refreshToken: token } = res;
  //       await setCookieRefreshToken(token);
  //       axios.defaults.headers.common['Authorization'] = `${grantType} ${accessToken}`;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  redirect('/auth/signIn');

  return <My />;
};

export default Page;
