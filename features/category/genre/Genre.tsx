'use client';

import { useSearchParams } from 'next/navigation';

import DefaultGenre from 'features/category/genre/_components/DefaultGenre';
import NewGenre from 'features/category/genre/_components/NewGenre';
import RankGenre from 'features/category/genre/_components/RankGenre';
import { GenreTypes } from 'types/performance';

interface GenreProps {
  genre: GenreTypes;
}

const Genre = ({ genre }: GenreProps) => {
  const searchParams = useSearchParams();
  const isRank = searchParams.get('rank');
  const isNew = searchParams.get('new');

  if (isRank) return <RankGenre genre={genre} />;
  if (isNew) return <NewGenre genre={genre} />;
  return <DefaultGenre genre={genre} />;
};

export default Genre;
