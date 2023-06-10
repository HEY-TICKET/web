'use client';

import { useCallback, useState } from 'react';

import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

import Tab from 'components/common/Tab/Tab';
import { GENRE, PERFORMANCE_GENRE_MAP } from 'constants/new/performance';
import { ROUTES } from 'constants/routes';
import CardList from 'features/category/genre/CardList';
import FilterChips, { FILTER_VALUE_MAP } from 'features/category/genre/filter/chip/FilterChips';
import { FILTER_MODAL_TAB_ITEM_LIST } from 'features/category/genre/filter/constants';
import * as Styles from 'features/category/genre/Genre.styles';
import CategoryFilterModal, {
  FILTER_MODAL_DEFAULT_VALUES,
  FilterModalFormValues,
} from 'features/category/modal/CategoryFilterModal';
import SortingModal from 'features/category/modal/SortingModal';
import useCustomToast from 'hooks/useCustomToast';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useModal from 'hooks/useModal';
// import { useInfinitePerformanceQuery } from 'reactQuery/performance';
import { ArrowRight, FilterIcon, SortIcon } from 'styles/icons';

export const SORTING_MODAL_LIST = [
  { caption: '최신순', value: 'latest' },
  { caption: '예매순', value: 'reservation' },
  { caption: '조회수순', value: 'viewing' },
];

export type SortingModalFormValues = {
  sorting: (typeof SORTING_MODAL_LIST)[number]['value'];
};

interface GenreProps {
  genre: keyof typeof GENRE;
}
const Header = new Map(PERFORMANCE_GENRE_MAP.map(({ caption, value }) => [value, caption]));

const DefaultGenre = ({ genre }: GenreProps) => {
  const { replace, push } = useRouter();
  const toast = useCustomToast();

  const title = Object.fromEntries(Header)[genre];

  const [tabIndex, setTabIndex] = useState(0);
  const [currentSorting, setCurrentSorting] = useState(SORTING_MODAL_LIST[0].value);
  const [prevFilterValues, setPrevFilterValues] = useState<FilterModalFormValues | null>(null);
  const [prevSortingValues, setPrevSortingValues] = useState<SortingModalFormValues | null>(null);
  const [chipValues, setChipValues] = useState(FILTER_MODAL_DEFAULT_VALUES);

  // TODO : 데이터 없는 동안만 임시 주석 처리

  // const { isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfinitePerformanceQuery(
  //   {
  //     page: 0,
  //     size: 24,
  //   },
  //   { keepPreviousData: true },
  // );

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([{ isIntersecting }]) => {
      console.log(isIntersecting);
      // if (hasNextPage && isIntersecting && !isFetchingNextPage) {
      //   await fetchNextPage();
      // }
    },
    [
      // fetchNextPage, hasNextPage, isFetchingNextPage
    ],
  );
  const { setTarget } = useIntersectionObserver({ onIntersect });

  const filterModalMethods = useForm<FilterModalFormValues>({
    mode: 'onTouched',
    defaultValues: FILTER_MODAL_DEFAULT_VALUES,
  });

  const sortingModalMethods = useForm<SortingModalFormValues>({
    mode: 'onTouched',
    defaultValues: { sorting: SORTING_MODAL_LIST[0].value },
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
    setChipValues(data);
    toast('필터가 적용되었습니다');
    filterModalClose();
  };

  const submitSortingValue = (data: SortingModalFormValues) => {
    // TODO : 데이터 submit
    setCurrentSorting(data.sorting);
    toast('필터가 적용되었습니다');
    sortingModalClose();
  };

  const clickCard = (id: string) => {
    push(`${ROUTES.category}/${genre}/${id}`);
  };

  const goToBack = () => replace(`${ROUTES.category}`);

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
    <>
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
      <Styles.Container>
        <Styles.GenreContents>
          <Styles.CardListWrapper>
            <CardList
              data={
                //FIXME : react-query api 교체 하면서 해당 부분도 체크
                // data?.pages.flat() ??
                []
              }
              loading={
                false // isFetchingNextPage || isLoading
              }
              onClick={clickCard}
            />
          </Styles.CardListWrapper>
          {/* desc : infinite query intersect ref*/}
          <Styles.Trigger ref={setTarget} />
        </Styles.GenreContents>
        {/* desc : 모달 */}
        {/* FIXME : 최초 isDirty true 변경 시 렌더링으로 스크롤 초기화 버그 */}
        <FormProvider {...filterModalMethods}>
          <FilterModalFrame canClose={false}>
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
          <SortingModalFrame canClose={false}>
            <SortingModal<SortingModalFormValues>
              name={'sorting'}
              list={SORTING_MODAL_LIST}
              onSubmit={sortingModalMethods.handleSubmit(submitSortingValue)}
              onCancel={cancelSortingModal}
            />
          </SortingModalFrame>
        </FormProvider>
      </Styles.Container>
    </>
  );
};

export default DefaultGenre;
