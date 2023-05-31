import { redirect } from 'next/navigation';

import My from 'features/my/My';

const Page = () => {
  redirect('/auth/signIn');

  return <My />;
};

export default Page;
