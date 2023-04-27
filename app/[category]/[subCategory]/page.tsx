import SubCategory from 'features/Category/SubCategory/SubCategory';

type PageParams = {
  subCategory: string;
};

type PageProps = {
  params: PageParams;
};

const Page = ({ params }: PageProps) => {
  // const queryClient = getQueryClient();
  // await queryClient.prefetchQuery(['hydrate-users'], exampleFetchApi);
  // const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <div>{params.subCategory}</div>
      {/*<Hydrate state={dehydratedState}>*/}
      <SubCategory />
      {/*</Hydrate>*/}
    </>
  );
};

export default Page;
