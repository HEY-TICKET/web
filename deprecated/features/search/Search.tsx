'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { PerformancesResponses } from 'apis/performance/type';
import Input from 'deprecated/components/Input/Input';
import { DUMMY_PERFORMANCES } from 'deprecated/constants/cardData';
import { ROUTES } from 'deprecated/constants/routes';
import SortingModal, {
  SORTING_MODAL_DEFAULT_VALUES,
} from 'deprecated/features/category/modal/SortingModal';
import * as Styles from 'deprecated/features/search/Search.styles';
import { FilterButton } from 'deprecated/features/search/Search.styles';
import SearchContents from 'deprecated/features/search/SearchContents';
import SearchHistory from 'deprecated/features/search/SearchHistory';
import { ArrowRight, SortIcon } from 'deprecated/styles/icons';
import useModal from 'hooks/useModal';

export type SearchFormValue = {
  search: string;
  sorting: string;
};

const FILTER_TAB_LIST = ['공연', '아티스트'] as const;

const Search = () => {
  const { back, push } = useRouter();
  const [currentTab, setCurrentTab] = useState<(typeof FILTER_TAB_LIST)[number]>(
    FILTER_TAB_LIST[0],
  );
  const [currentSorting, setCurrentSorting] = useState(SORTING_MODAL_DEFAULT_VALUES['sorting']);
  const [prevSortingValues, setPrevSortingValues] = useState<string | null>(null);
  const [showSearchHistory, setShowSearchHistory] = useState(true);

  // FIXME : api 작업 가능하게 되면 react-query로 data 관리
  const [data, setData] = useState<PerformancesResponses[]>([]);

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
    search && push(`${ROUTES.search}?keyword=${search}`);

    setData(DUMMY_PERFORMANCES);
    setCurrentSorting(sorting);

    // FIXME : 검색을 하거나, ESC를 누르거나(?) (KREAM은 취소 버튼이 있음)
    setShowSearchHistory(false);
    sortingModalIsOpen && sortingModalClose();
  };

  const cancelSortingModal = () => {
    prevSortingValues && setValue('sorting', prevSortingValues);
  };

  return (
    <FormProvider {...methods}>
      <Styles.Form id={'search-input-form'} onSubmit={handleSubmit(onValidSubmit)}>
        <Styles.Container>
          <Styles.StickyBox>
            <Styles.InputWrapper>
              <Styles.BackIconWrapper onClick={clickBackButton}>
                <ArrowRight size={32} />
              </Styles.BackIconWrapper>

              <Input<SearchFormValue>
                name={'search'}
                placeholder={'공연명, 출연진, 아티스트 검색'}
                hasIcon
                autoBlur
                onFocus={() => setShowSearchHistory(true)}
              />
            </Styles.InputWrapper>
            {!showSearchHistory && (
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
                  {data.length && (
                    <Styles.SearchResult>{`${getValues(
                      'search',
                    )} 검색 결과 ${data.length.addComma()}`}</Styles.SearchResult>
                  )}
                  <Styles.SortIconWrapper type={'button'} onClick={sortingModalOpen}>
                    <SortIcon size={24} />
                    {currentSorting}
                  </Styles.SortIconWrapper>
                </Styles.SearchResultWrapper>
              </Styles.CategoryWrapper>
            )}
          </Styles.StickyBox>
          {showSearchHistory ? <SearchHistory /> : <SearchContents data={data} loading={false} />}
        </Styles.Container>
      </Styles.Form>
      <SortingModalFrame canClose={false}>
        <SortingModal onSubmit={handleSubmit(onValidSubmit)} onCancel={cancelSortingModal} />
      </SortingModalFrame>
    </FormProvider>
  );
};

export default Search;
