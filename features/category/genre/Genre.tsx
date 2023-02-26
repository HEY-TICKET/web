'use client';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import Chip from 'components/common/Chip/Chip';
import CardList from 'features/category/genre/CardList';
import * as Styles from 'features/category/genre/Genre.styles';
import CategoryFilterModal from 'features/category/modal/CategoryFilterModal';
import useModal from 'hooks/useModal';
import { ArrowRight, FilterIcon, SortIcon } from 'styles/icons';

import SortingModal from '../modal/SortingModal';

interface GenreProps {
  title: string;
}

const Genre = ({ title }: GenreProps) => {
  const [initNum, setInitNum] = useState(0);

  const { back } = useRouter();
  const { Modal: FilterModalFrame, open: filterModalOpen, isOpen } = useModal();
  const { Modal: SortingModalFrame, open: sortingModalOpen } = useModal();

  const goToBack = () => back();

  // FIXME : number 말고 다른 key 로 컨트롤 해야 좋을 것 같다.
  const clickChip = (initNum: number) => {
    setInitNum(initNum);
    filterModalOpen();
  };

  // DESC : 모달 닫힐 때 동작
  useEffect(() => {
    !isOpen && setInitNum(0);
  }, [isOpen]);

  return (
    <Styles.Container>
      <Styles.GenreContents>
        <Styles.StickyBox>
          <Styles.GenreHeader>
            <Styles.LeftIconWrapper onClick={goToBack}>
              <ArrowRight size={28} />
            </Styles.LeftIconWrapper>
            <span>{title}</span>
          </Styles.GenreHeader>
          <Styles.FilterContainer>
            <Styles.FilterWrapper>
              <Chip text={'전체'} active={true} onClick={() => clickChip(0)} />
              <Chip text={'공연일'} onClick={() => clickChip(1)} />
              <Chip text={'진행 상태'} onClick={() => clickChip(2)} />
              <Chip text={'예매 가격'} onClick={() => clickChip(3)} />
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
        </Styles.StickyBox>
        <Styles.CardListWrapper>
          <CardList />
        </Styles.CardListWrapper>
      </Styles.GenreContents>
      {/* desc : 모달 */}
      <SortingModalFrame canClose={false}>
        <SortingModal />
      </SortingModalFrame>
      <FilterModalFrame canClose={false}>
        <CategoryFilterModal initActiveNum={initNum} />
      </FilterModalFrame>
    </Styles.Container>
  );
};

export default Genre;
