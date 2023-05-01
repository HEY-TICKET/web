'use client';

import { useSearchParams } from 'next/navigation';

import { PerformancesResponses } from 'apis/performance/type';
import CardList from 'features/category/genre/CardList';
import NoResult from 'features/search/NoResult';

import * as Styles from './Search.styles';

type Props = {
  data: PerformancesResponses[];
  loading: boolean;
};

const SearchContents = ({ data, loading }: Props) => {
  const keyword = useSearchParams().get('keyword');

  const isNoResult = data.length === 0;

  if (!keyword) return <></>;

  if (isNoResult) return <NoResult />;

  return (
    <Styles.SearchContents>
      <CardList data={data} loading={loading} />
    </Styles.SearchContents>
  );
};

export default SearchContents;
