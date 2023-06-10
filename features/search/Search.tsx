'use client';

import { useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Input from 'components/Input/Input';
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
import useModal from 'hooks/useModal';
import useOutsideClick from 'hooks/useOutsideClick';
import { ArrowRight, SortIcon } from 'styles/icons';

export type SearchFormValue = {
  search: string;
  sorting: string;
};

const FILTER_TAB_LIST = ['공연', '아티스트'] as const;

const Search = () => {
  const { back, push } = useRouter();
  const keyword = useSearchParams().get('keyword');

  const [currentTab, setCurrentTab] = useState<(typeof FILTER_TAB_LIST)[number]>(
    FILTER_TAB_LIST[0],
  );
  const [currentSorting, setCurrentSorting] = useState(SORTING_MODAL_LIST[0].value);
  const [prevSortingValues, setPrevSortingValues] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(!keyword);

  const ref = useOutsideClick<HTMLDivElement>({
    outsideClick: () => {
      setIsFocused(false);
    },
  });

  // TODO : 실제 값 들어오면 keyword 처리
  // const { data, isLoading } = usePerformanceQuery({ page: 0, size: 10 }, { enabled: !!keyword });

  // console.log(data);
  const data = [];
  const isLoading = true;

  const methods = useForm<SearchFormValue>({
    mode: 'onTouched',
    defaultValues: { search: '', sorting: '예매순' },
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
                  {FILTER_TAB_LIST.map((tab) => (
                    <FilterButton
                      key={tab}
                      $active={tab === currentTab}
                      onClick={() => setCurrentTab(tab)}
                    >
                      {tab}
                    </FilterButton>
                  ))}
                </Styles.FilterWrapper>
                <Styles.SearchResultWrapper>
                  {data?.length && (
                    <Styles.SearchResult>{`${getValues('search')} 검색 결과 ${
                      data.length
                    }`}</Styles.SearchResult>
                  )}
                  <Styles.SortIconWrapper type={'button'} onClick={sortingModalOpen}>
                    <SortIcon size={24} />
                    {currentSorting}
                  </Styles.SortIconWrapper>
                </Styles.SearchResultWrapper>
              </Styles.CategoryWrapper>
            )}
          </Styles.StickyBox>
          {!isLoading && <SearchContents data={[]} loading={isLoading} />}
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
