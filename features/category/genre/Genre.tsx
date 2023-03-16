'use client';

import { useCallback, useState } from 'react';

import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

import { SIZE_PER_PAGE } from 'apis/performance/constants';
import Tab from 'components/common/Tab/Tab';
import { ROUTES } from 'constants/routes';
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
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useModal from 'hooks/useModal';
import { useInfinitePerformanceQuery } from 'reactQuery/performance';
import { ArrowRight, FilterIcon, SortIcon } from 'styles/icons';

interface GenreProps {
  title: string;
}

const Genre = ({ title }: GenreProps) => {
  const { back, push } = useRouter();
  const toast = useCustomToast();

  const [tabIndex, setTabIndex] = useState(0);
  const [currentSorting, setCurrentSorting] = useState(SORTING_MODAL_DEFAULT_VALUES['sorting']);
  const [prevFilterValues, setPrevFilterValues] = useState<FilterModalFormValues | null>(null);
  const [prevSortingValues, setPrevSortingValues] = useState<SortingModalFormValues | null>(null);
  const [chipValues, setChipValues] = useState(FILTER_MODAL_DEFAULT_VALUES);

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfinitePerformanceQuery({
    page: 0,
    size: SIZE_PER_PAGE,
  });

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([{ isIntersecting }]) => {
      if (hasNextPage && isIntersecting && !isFetchingNextPage) {
        await fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );
  const { setTarget } = useIntersectionObserver({ onIntersect });

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
  const {
    Modal: SortingModalFrame,
    open: sortingModalOpen,
    close: sortingModalClose,
  } = useModal(
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
    toast('필터가 적용되었습니다');
    sortingModalClose();
  };

  const clickCard = (id: string) => {
    console.log(id);
    push(`${ROUTES.perform}/${id}`);
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
          <CardList data={data?.pages.flat() ?? []} onClick={clickCard} />
        </Styles.CardListWrapper>
        {/* desc : infinite query intersect ref*/}
        <div ref={setTarget} />
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
      <FormProvider {...sortingModalMethods}>
        <SortingModalFrame canClose={false} mobilePivot={'bottom'}>
          <SortingModal
            onSubmit={sortingModalMethods.handleSubmit(submitSortingValue)}
            onCancel={cancelSortingModal}
          />
        </SortingModalFrame>
      </FormProvider>
    </Styles.Container>
  );
};

export default Genre;
