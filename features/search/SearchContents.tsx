'use client';

import NoResult from 'features/search/NoResult';

import * as Styles from './Search.styles';

const SearchContents = () => {
  const isSearchResult = false;

  if (!isSearchResult) return <NoResult />;

  return <Styles.SearchContents></Styles.SearchContents>;
};

export default SearchContents;
