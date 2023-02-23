'use client';

import * as Styles from 'features/category/genre/Genre.styles';
import Chip from 'components/common/Chip/Chip';
import CardList from 'features/category/genre/CardList';
import { ArrowRight, FilterIcon, SortIcon } from 'styles/icons';
import { useRouter } from 'next/navigation';
import useModal from 'hooks/useModal';
import CategoryFilterModal from 'features/category/modal/CategoryFilterModal';
import SortingModal from '../modal/SortingModal';

interface GenreProps {
  title: string;
}

const Genre = ({ title }: GenreProps) => {
  const { back } = useRouter();
  const { Modal: FilterModalFrame, open: filterModalOpen } = useModal();
  const { Modal: SortingModalFrame, open: sortingModalOpen } = useModal();

  const goToBack = () => back();

  return (
    <>
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
          <Styles.FilterIconWrapper onClick={filterModalOpen}>
            <FilterIcon />
          </Styles.FilterIconWrapper>
        </Styles.FilterContainer>
        <Styles.SubFilterWrapper>
          <Styles.SortIconWrapper onClick={sortingModalOpen}>
            <SortIcon size={24} />
            예매순
          </Styles.SortIconWrapper>
        </Styles.SubFilterWrapper>
        <Styles.CardListWrapper>
          <CardList />
        </Styles.CardListWrapper>
      </Styles.GenreContents>
      <SortingModalFrame canClose={false}>
        <SortingModal />
      </SortingModalFrame>
      <FilterModalFrame canClose={false}>
        <CategoryFilterModal />
      </FilterModalFrame>
    </>
  );
};

export default Genre;
