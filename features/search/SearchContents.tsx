'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { PerformanceResponse } from 'apis/performance/type';
import { ROUTES } from 'constants/routes';
import CardList from 'features/category/genre/CardList';
import NoResult from 'features/search/NoResult';
import { GenreTypes } from 'types/performance';

import * as Styles from './Search.styles';

type Props = {
  data: PerformanceResponse[];
  loading: boolean;
};

const SearchContents = ({ data, loading }: Props) => {
  console.log(data);
  const { push } = useRouter();
  const keyword = useSearchParams().get('keyword');

  const clickCard = (id: string, genre: GenreTypes) => {
    push(`${ROUTES.category}/${genre}/${id}`);
  };

  const isNoResult = data.length === 0;

  if (!keyword) return <></>;

  if (isNoResult) return <NoResult />;

  return (
    <Styles.SearchContents>
      <CardList data={data} loading={loading} onClick={clickCard} />
    </Styles.SearchContents>
  );
};

export default SearchContents;
