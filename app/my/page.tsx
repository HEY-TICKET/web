import { redirect } from 'next/navigation';

import My from 'features/my/My';

const Page = () => {
  redirect('/auth/login');

  return <My />;
};

export default Page;
