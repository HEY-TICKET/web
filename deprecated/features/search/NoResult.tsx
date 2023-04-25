'use client';

import Link from 'next/link';

import Button from 'deprecated/components/common/Button/Button';
import * as Styles from 'deprecated/features/search/Search.styles';

const NoResult = () => {
  return (
    <Styles.NoResultWrapper>
      <Styles.NoResult>
        <h5>검색 결과가 없어요</h5>
        <span>{`공연명 혹은 아티스트를\n간단한 키워드로 입력하면 검색이 더 잘 돼요!`}</span>
        <Link href={'/'}>
          <Button colorTheme={'line'} width={208}>
            다른 공연 둘러보기
          </Button>
        </Link>
      </Styles.NoResult>
    </Styles.NoResultWrapper>
  );
};

export default NoResult;
