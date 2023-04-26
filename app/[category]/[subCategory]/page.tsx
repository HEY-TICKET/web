type PageParams = {
  subCategory: string;
};

type PageProps = {
  params: PageParams;
};

const Page = ({ params }: PageProps) => {
  return <div>{params.subCategory}</div>;
};

export default Page;
