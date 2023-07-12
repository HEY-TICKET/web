import My from 'features/my/My';

const Page = () => {
  return <My />;
};

export default Page;

// export async function getUser() {
//   const cookieStore = cookies();
//   const cookie = cookieStore.get(REFRESH_TOKEN);
//   if (cookie) {
//     const { value: refreshToken } = cookie;
//     // const { email } = authInfo.getItem();
//     const email = 'seob9717@gmail.com';
//
//     if (email) {
//       try {
//         const res = await memberService.refreshToken({ email, refreshToken });
//         if (res.accessToken) {
//           const user = await memberService.getUser({ id: email });
//           console.log('server user => ', user);
//           return user;
//         } else {
//           return null;
//         }
//       } catch (error) {
//         console.error(error);
//         return null;
//       }
//     } else {
//       return null;
//     }
//   } else {
//     return null;
//   }
// }
