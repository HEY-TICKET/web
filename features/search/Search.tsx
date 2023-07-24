'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Input from 'components/Input/Input';
import { SEARCH_TYPES, SEARCH_TYPES_MAP } from 'constants/performance/common';
import { ROUTES } from 'constants/routes';
import {
  SORTING_MODAL_LIST,
  SortingModalFormValues,
} from 'features/category/genre/_components/DefaultGenre';
import SortingModal from 'features/category/modal/SortingModal';
import * as Styles from 'features/search/Search.styles';
import { FilterButton } from 'features/search/Search.styles';
import SearchContents from 'features/search/SearchContents';
import SearchHistory from 'features/search/SearchHistory';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useModal from 'hooks/useModal';
import useOutsideClick from 'hooks/useOutsideClick';
import { useInfiniteSearchPerformanceQuery } from 'reactQuery/performance';
import { ArrowRight, SortIcon } from 'styles/icons';
import { SearchTypes } from 'types/performance';

export type SearchFormValue = {
  search: string;
  sorting: string;
};

const Search = () => {
  const { back, push } = useRouter();
  const keyword = useSearchParams().get('keyword');

  const [currentTab, setCurrentTab] = useState<SearchTypes>(SEARCH_TYPES[0]);
  const [currentSorting, setCurrentSorting] = useState(SORTING_MODAL_LIST[0].value);
  const [prevSortingValues, setPrevSortingValues] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(!keyword);

  const ref = useOutsideClick<HTMLDivElement>({
    outsideClick: () => {
      setIsFocused(false);
    },
  });

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteSearchPerformanceQuery(
      { page: 1, pageSize: 24, searchType: currentTab, query: keyword ?? '' },
      { enabled: !!keyword },
    );

  const searchList = useMemo(
    () => data?.pages.map((response) => response.contents).flat() ?? [],
    [data?.pages],
  );

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([{ isIntersecting }]) => {
      console.log(isIntersecting);
      if (hasNextPage && isIntersecting && !isFetchingNextPage) {
        await fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );

  const { setTarget } = useIntersectionObserver({ onIntersect });

  const methods = useForm<SearchFormValue>({
    mode: 'onTouched',
    defaultValues: { search: keyword ?? '', sorting: '예매순' },
  });
  const { handleSubmit, getValues, setValue } = methods;

  const {
    Modal: SortingModalFrame,
    isOpen: sortingModalIsOpen,
    open: sortingModalOpen,
    close: sortingModalClose,
  } = useModal(
    () => setPrevSortingValues(getValues('sorting')),
    () => setPrevSortingValues(null),
  );

  const clickBackButton = () => {
    back();
  };

  const onValidSubmit: SubmitHandler<SearchFormValue> = ({ search, sorting }) => {
    setCurrentSorting(sorting);
    sortingModalIsOpen && sortingModalClose();

    search && push(`${ROUTES.search}?keyword=${search}`);
  };

  const cancelSortingModal = () => {
    prevSortingValues && setValue('sorting', prevSortingValues);
  };

  useEffect(() => {
    if (keyword) {
      setIsFocused(false);
      setValue('search', keyword);
    }
  }, [keyword, setValue]);

  return (
    <FormProvider {...methods}>
      <Styles.Form id={'search-input-form'} onSubmit={handleSubmit(onValidSubmit)}>
        <Styles.Container>
          <Styles.StickyBox ref={ref}>
            <Styles.HeaderWrapper>
              <Styles.BackIconWrapper onClick={clickBackButton}>
                <ArrowRight size={32} />
              </Styles.BackIconWrapper>
              <Styles.InputWrapper>
                <Input<SearchFormValue>
                  name={'search'}
                  placeholder={'공연명, 출연진, 아티스트 검색'}
                  autoFocus={!keyword}
                  onFocus={() => setIsFocused(true)}
                />
              </Styles.InputWrapper>
            </Styles.HeaderWrapper>
            {isFocused && <SearchHistory />}
            {!!keyword && (
              <Styles.CategoryWrapper>
                <Styles.FilterWrapper>
                  {SEARCH_TYPES_MAP.map(({ caption, value }) => (
                    <FilterButton
                      key={value}
                      $active={value === currentTab}
                      onClick={() => setCurrentTab(value)}
                    >
                      {caption}
                    </FilterButton>
                  ))}
                </Styles.FilterWrapper>
                <Styles.SearchResultWrapper>
                  {searchList.length && (
                    <Styles.SearchResult>
                      <b>{getValues('search')}&nbsp;</b>
                      <span>검색 결과 {searchList.length} </span>
                    </Styles.SearchResult>
                  )}
                  <Styles.SortIconWrapper type={'button'} onClick={sortingModalOpen}>
                    <SortIcon size={24} />
                    {currentSorting}
                  </Styles.SortIconWrapper>
                </Styles.SearchResultWrapper>
              </Styles.CategoryWrapper>
            )}
          </Styles.StickyBox>
          <SearchContents data={searchList} loading={isLoading} />
          {/* desc : infinite query intersect ref*/}
          <div ref={setTarget} />
        </Styles.Container>
      </Styles.Form>
      <SortingModalFrame canClose={false}>
        <SortingModal<SortingModalFormValues>
          name={'sorting'}
          list={SORTING_MODAL_LIST}
          onSubmit={handleSubmit(onValidSubmit)}
          onCancel={cancelSortingModal}
        />
      </SortingModalFrame>
    </FormProvider>
  );
};

export default Search;
