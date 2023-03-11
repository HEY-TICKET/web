'use client';
import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

import Tab from 'components/common/Tab/Tab';
import { DUMMY_PERFORMANCES } from 'constants/cardData';
import CardList from 'features/category/genre/CardList';
import FilterChips, { FILTER_VALUE_MAP } from 'features/category/genre/filter/chip/FilterChips';
import { FILTER_MODAL_TAB_ITEM_LIST } from 'features/category/genre/filter/constants';
import * as Styles from 'features/category/genre/Genre.styles';
import CategoryFilterModal, {
  FILTER_MODAL_DEFAULT_VALUES,
  FilterModalFormValues,
} from 'features/category/modal/CategoryFilterModal';
import SortingModal, {
  SORTING_MODAL_DEFAULT_VALUES,
  SortingModalFormValues,
} from 'features/category/modal/SortingModal';
import useCustomToast from 'hooks/useCustomToast';
import useModal from 'hooks/useModal';
import { ArrowRight, FilterIcon, SortIcon } from 'styles/icons';

interface GenreProps {
  title: string;
}

const Genre = ({ title }: GenreProps) => {
  const { back } = useRouter();
  const toast = useCustomToast();

  const [tabIndex, setTabIndex] = useState(0);
  const [currentSorting, setCurrentSorting] = useState(SORTING_MODAL_DEFAULT_VALUES['sorting']);
  const [prevFilterValues, setPrevFilterValues] = useState<FilterModalFormValues | null>(null);
  const [prevSortingValues, setPrevSortingValues] = useState<SortingModalFormValues | null>(null);
  const [chipValues, setChipValues] = useState(FILTER_MODAL_DEFAULT_VALUES);

  const filterModalMethods = useForm<FilterModalFormValues>({
    mode: 'onTouched',
    defaultValues: FILTER_MODAL_DEFAULT_VALUES,
  });

  const sortingModalMethods = useForm<SortingModalFormValues>({
    mode: 'onTouched',
    defaultValues: SORTING_MODAL_DEFAULT_VALUES,
  });

  const {
    Modal: FilterModalFrame,
    open: filterModalOpen,
    close: filterModalClose,
  } = useModal(
    () => setPrevFilterValues(filterModalMethods.getValues()),
    () => setPrevFilterValues(null),
  );
  const { Modal: SortingModalFrame, open: sortingModalOpen } = useModal(
    () => setPrevSortingValues(sortingModalMethods.getValues()),
    () => setPrevSortingValues(null),
  );

  const submitFilterValue = (data: FilterModalFormValues) => {
    // TODO : 데이터 submit
    console.log(data);
    setChipValues(data);
    toast('필터가 적용되었습니다');
    filterModalClose();
  };

  const submitSortingValue = (data: SortingModalFormValues) => {
    // TODO : 데이터 submit
    console.log(data);
    setCurrentSorting(data.sorting);
  };

  const goToBack = () => back();

  const clickChip = (index: number) => {
    setTabIndex(index);
    filterModalOpen();
  };

  const closeChip = (name: keyof typeof FILTER_MODAL_DEFAULT_VALUES) => {
    filterModalMethods.resetField(name);
    setChipValues((prev) => ({ ...prev, [name]: FILTER_MODAL_DEFAULT_VALUES[name] }));
    toast(`${FILTER_VALUE_MAP[name]} 필터가 해제되었습니다`);
  };

  const cancelFilterModal = () => {
    prevFilterValues && filterModalMethods.reset(prevFilterValues);
  };

  const cancelSortingModal = () => {
    prevSortingValues && sortingModalMethods.reset(prevSortingValues);
  };

  const resetFilter = () => {
    filterModalMethods.reset(FILTER_MODAL_DEFAULT_VALUES);
  };

  return (
    <Styles.Container>
      <Styles.GenreContents>
        <Styles.StickyBox>
          <Styles.GenreHeader>
            <Styles.LeftIconWrapper onClick={goToBack}>
              <ArrowRight size={28} />
            </Styles.LeftIconWrapper>
            <Styles.Title>{title}</Styles.Title>
          </Styles.GenreHeader>
          <Styles.FilterContainer>
            <Styles.FilterWrapper>
              <FilterChips chipValues={chipValues} clickChip={clickChip} closeChip={closeChip} />
            </Styles.FilterWrapper>
            <Styles.FilterIconWrapper onClick={filterModalOpen}>
              <FilterIcon />
            </Styles.FilterIconWrapper>
          </Styles.FilterContainer>
          <Styles.SubFilterWrapper>
            <Styles.SortIconWrapper onClick={sortingModalOpen}>
              <SortIcon size={24} />
              {currentSorting}
            </Styles.SortIconWrapper>
          </Styles.SubFilterWrapper>
        </Styles.StickyBox>
        <Styles.CardListWrapper>
          <CardList data={DUMMY_PERFORMANCES} />
        </Styles.CardListWrapper>
      </Styles.GenreContents>
      {/* desc : 모달 */}
      {/* FIXME : 최초 isDirty true 변경 시 렌더링으로 스크롤 초기화 버그 */}
      <FormProvider {...filterModalMethods}>
        <FilterModalFrame canClose={false} mobilePivot={'bottom'}>
          <CategoryFilterModal
            onCancel={cancelFilterModal}
            onReset={resetFilter}
            onSubmit={filterModalMethods.handleSubmit(submitFilterValue)}
          >
            <Tab tabList={FILTER_MODAL_TAB_ITEM_LIST} tabIndex={tabIndex} />
          </CategoryFilterModal>
        </FilterModalFrame>
      </FormProvider>
      <SortingModalFrame canClose={false} mobilePivot={'bottom'}>
        <SortingModal
          methods={sortingModalMethods}
          onSubmit={submitSortingValue}
          onCancel={cancelSortingModal}
        />
      </SortingModalFrame>
    </Styles.Container>
  );
};

export default Genre;
