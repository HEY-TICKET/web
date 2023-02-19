'use client';

import * as Styles from 'features/category/genre/Genre.styles';
import Chip from 'components/common/Chip/Chip';
import CardList from 'features/category/genre/CardList';
import { ArrowRight, FilterIcon, SortIcon } from 'styles/icons';
import { useRouter } from 'next/navigation';

interface GenreProps {
  title: string;
}

const Genre = ({ title }: GenreProps) => {
  const { back } = useRouter();

  const goToBack = () => back();

  return (
    <Styles.GenreContents>
      <Styles.GenreHeader>
        <Styles.LeftIconWrapper onClick={goToBack}>
          <ArrowRight size={28} />
        </Styles.LeftIconWrapper>
        <span>{title}</span>
      </Styles.GenreHeader>
      <Styles.FilterContainer>
        <Styles.FilterWrapper>
          <Chip text={'전체'} />
          <Chip text={'공연일'} />
          <Chip text={'진행 상태'} />
        </Styles.FilterWrapper>
        <Styles.FilterIconWrapper>
          <FilterIcon />
        </Styles.FilterIconWrapper>
      </Styles.FilterContainer>
      <Styles.SubFilterWrapper>
        <Styles.SortIconWrapper>
          <SortIcon size={24} />
          예매순
        </Styles.SortIconWrapper>
      </Styles.SubFilterWrapper>
      <CardList />
    </Styles.GenreContents>
  );
};

export default Genre;
