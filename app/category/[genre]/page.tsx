import Genre from 'features/category/genre/Genre';
import { GenreTypes } from 'types/performance';

interface PageProps {
  params: { genre: GenreTypes };
}

const Page = ({ params }: PageProps) => {
  const { genre } = params;

  if (!genre) return null;

  return <Genre genre={genre} />;
};

export default Page;
