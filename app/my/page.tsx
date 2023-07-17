// import { use } from 'react';

// import { cookies } from 'next/headers';

// import { REFRESH_TOKEN } from 'constants/auth';
import My from 'features/my/My';

export default function Page() {
  // use(getUser());
  return <My />;
}

// export async function getUser() {
//   const cookieStore = cookies();
//   const cookie = cookieStore.get(REFRESH_TOKEN);
//   if (cookie) {
//     const { value: refreshToken } = cookie;
//     // const { email } = authInfo.getItem();
//     const email = 'seob9717@gmail.com';
//
//     console.log('refreshToken => ', refreshToken);
//
//     if (email && refreshToken) {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/members/token`, {
//           method: 'PUT',
//           body: JSON.stringify({
//             email,
//             refreshToken,
//           }),
//         });
//         console.log(res);
//       } catch (err) {
//         //
//       }
//     }
//   }
// }
