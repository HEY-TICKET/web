import { GENRE } from 'constants/new/performance';
import Genre from 'features/category/genre/Genre';

interface PageProps {
  params: { genre: keyof typeof GENRE };
}

const Page = ({ params }: PageProps) => {
  const { genre } = params;

  if (!genre) return null;

  return <Genre genre={genre} />;
};

export default Page;
