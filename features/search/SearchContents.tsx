'use client';

import { PerformancesResponses } from 'apis/performance/type';
import CardList from 'features/category/genre/CardList';
import NoResult from 'features/search/NoResult';

import * as Styles from './Search.styles';

type Props = {
  data: PerformancesResponses[];
};

const SearchContents = ({ data }: Props) => {
  const isNoResult = data.length === 0;

  if (isNoResult) return <NoResult />;

  return (
    <Styles.SearchContents>
      <CardList data={data} />
    </Styles.SearchContents>
  );
};

export default SearchContents;
