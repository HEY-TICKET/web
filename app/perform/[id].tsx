interface PageProps {
  params: { id: string };
}

export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';

export function generateStaticParams() {
  return [{ id: 'PF214630' }, { id: 'PF214644' }, { id: 'PF214630' }, { id: 'PF214627' }];
}

const Page = ({ params }: PageProps) => {
  return <div>Perform ${params.id} Page</div>;
};

export default Page;
