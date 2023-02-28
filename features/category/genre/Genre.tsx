'use client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import Chip from 'components/common/Chip/Chip';
import CardList from 'features/category/genre/CardList';
import { FILTER_MODAL_TAB_ITEM_LIST } from 'features/category/genre/filter/constants';
import * as Styles from 'features/category/genre/Genre.styles';
import CategoryFilterModal from 'features/category/modal/CategoryFilterModal';
import SortingModal from 'features/category/modal/SortingModal';
import useModal from 'hooks/useModal';
import useTab from 'hooks/useTab';
import { ArrowRight, FilterIcon, SortIcon } from 'styles/icons';

interface GenreProps {
  title: string;
}

export type FormValues = {
  region: string[];
  date: Date;
  status: string[];
  price: string;
};

export const DEFAULT_VALUES = {
  region: ['전체'],
  date: new Date(),
  status: ['공연중'],
  price: '전체',
};

const Genre = ({ title }: GenreProps) => {
  const { TabMenu, setCurrent } = useTab({ tabList: FILTER_MODAL_TAB_ITEM_LIST });
  const { back } = useRouter();
  const { Modal: FilterModalFrame, open: filterModalOpen } = useModal();
  const { Modal: SortingModalFrame, open: sortingModalOpen } = useModal();

  const methods = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: DEFAULT_VALUES,
  });

  const goToBack = () => back();

  const clickChip = (index: number) => {
    setCurrent(index);
    filterModalOpen();
  };

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
              {FILTER_MODAL_TAB_ITEM_LIST.map(({ title }, index) => (
                <Chip key={index} text={title} active={true} onClick={() => clickChip(index)} />
              ))}
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
      {/* FIXME : rerendering 버그 */}
      <FilterModalFrame canClose={false}>
        <CategoryFilterModal methods={methods} TabMenu={TabMenu} />
      </FilterModalFrame>
    </Styles.Container>
  );
};

export default Genre;
