'use client';

import { CardListItem } from 'constants/cardData';
import CardList from 'features/category/genre/CardList';
import NoResult from 'features/search/NoResult';

import * as Styles from './Search.styles';

type Props = {
  data: CardListItem[];
  visible: boolean;
};

const SearchContents = ({ data, visible }: Props) => {
  const isNoResult = data.length === 0;

  if (!visible) return null;

  if (isNoResult) return <NoResult />;

  return (
    <Styles.SearchContents>
      <CardList data={data} />
    </Styles.SearchContents>
  );
};

export default SearchContents;
