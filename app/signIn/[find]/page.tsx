'use client';

type PageProps = {
  params: {
    find: string;
  };
};

const Page = ({ params }: PageProps) => {
  const { find } = params;

  return <div> {find} Page</div>;
};

export default Page;
