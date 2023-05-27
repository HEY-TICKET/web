'use client';

import { useSearchParams } from 'next/navigation';

import { PerformanceCommonResponse } from 'apis/performance/type';
import CardList from 'features/category/genre/CardList';
import NoResult from 'features/search/NoResult';

import * as Styles from './Search.styles';

type Props = {
  data: PerformanceCommonResponse[];
  loading: boolean;
};

const SearchContents = ({ data, loading }: Props) => {
  const keyword = useSearchParams().get('keyword');

  const isNoResult = data.length === 0;

  if (!keyword) return <></>;

  if (isNoResult) return <NoResult />;

  return (
    <Styles.SearchContents>
      <CardList
        data={
          // 배포 테스트
          //FIXME : react-query api 교체 하면서 해당 부분도 체크
          []
        }
        loading={loading}
      />
    </Styles.SearchContents>
  );
};

export default SearchContents;
