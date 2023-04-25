'use client';

import { PerformancesResponses } from 'apis/performance/type';
import CardList from 'deprecated/features/category/genre/CardList';
import NoResult from 'deprecated/features/search/NoResult';

import * as Styles from './Search.styles';

type Props = {
  data: PerformancesResponses[];
  loading: boolean;
};

const SearchContents = ({ data, loading }: Props) => {
  const isNoResult = data.length === 0;

  if (isNoResult) return <NoResult />;

  return (
    <Styles.SearchContents>
      <CardList data={data} loading={loading} />
    </Styles.SearchContents>
  );
};

export default SearchContents;
