'use client';

import React, { useCallback, useMemo, useState } from 'react';

import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

import { PerformanceNewParams } from 'apis/performance/type';
import Chip from 'components/common/Chip/Chip';
import { GENRE_LIST_MAP, SORTING_METHOD_LIST_MAP } from 'constants/performance/common';
import { ROUTES } from 'constants/routes';
import CardList from 'features/category/genre/CardList';
import * as Styles from 'features/category/genre/Genre.styles';
import SortingModal from 'features/category/modal/SortingModal';
import useCustomToast from 'hooks/useCustomToast';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useModal from 'hooks/useModal';
import { useInfiniteNewPerformanceQuery } from 'reactQuery/performance';
import { ArrowRight, SortIcon } from 'styles/icons';
import { GenreTypes, SortingMethodTypes } from 'types/performance';

interface GenreProps {
  genre: GenreTypes;
}

interface SortTypeModalFormValues {
  sortType: SortingMethodTypes;
}

const NEW_PERFORMANCE_GENRE_MAP = GENRE_LIST_MAP;

const INITIAL_SORT_TYPE: SortingMethodTypes = 'CREATED_DATE';

const NewGenre = ({ genre }: GenreProps) => {
  const { replace, push, back } = useRouter();
  const toast = useCustomToast();

  const [prevSortTypeValues, setPrevSortTypeValues] = useState<SortingMethodTypes | null>(
    INITIAL_SORT_TYPE,
  );

  // TODO : setOrder 처리
  const [order] = useState<PerformanceNewParams['sortOrder']>('DESC');
  const [sortType, setSortType] = useState<SortingMethodTypes>(INITIAL_SORT_TYPE);

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteNewPerformanceQuery({
      page: 0,
      pageSize: 24,
      genre: genre,
      sortOrder: order,
      sortType: sortType,
    });

  const cardList = useMemo(
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

  const sortingModalMethods = useForm<{ sortType: SortingMethodTypes }>({
    mode: 'onTouched',
    defaultValues: { sortType: 'CREATED_DATE' },
  });

  const {
    Modal: SortingModalFrame,
    open: sortingModalOpen,
    close: sortingModalClose,
  } = useModal(
    () => setPrevSortTypeValues(sortingModalMethods.getValues('sortType')),
    () => setPrevSortTypeValues(null),
  );

  const submitSortingValue = (data: SortTypeModalFormValues) => {
    // TODO : 데이터 submit
    setSortType(data.sortType);
    toast('필터가 적용되었습니다');
    sortingModalClose();
  };

  const clickCard = (id: string) => {
    push(`${ROUTES.category}/${genre}/${id}`);
  };

  const clickChip = (genre: (typeof NEW_PERFORMANCE_GENRE_MAP)[number]['value']) => {
    replace(`/category/${genre}?new=true`);
  };

  const cancelSortingModal = () => {
    prevSortTypeValues && sortingModalMethods.reset({ sortType: prevSortTypeValues });
  };

  return (
    <>
      <Styles.StickyBox>
        <Styles.GenreHeader>
          <Styles.LeftIconWrapper onClick={back}>
            <ArrowRight size={28} />
          </Styles.LeftIconWrapper>
          <Styles.Title>새로 나온 공연</Styles.Title>
        </Styles.GenreHeader>
        <Styles.FilterContainer>
          <Styles.FilterWrapper>
            {NEW_PERFORMANCE_GENRE_MAP.map(({ caption, value }, index) => (
              <Chip
                key={index}
                active={value === genre}
                text={caption}
                onClick={() => clickChip(value)}
              />
            ))}
          </Styles.FilterWrapper>
        </Styles.FilterContainer>
        <Styles.SubFilterWrapper>
          <Styles.SortIconWrapper onClick={sortingModalOpen}>
            <SortIcon size={24} />
            {SORTING_METHOD_LIST_MAP.find(({ value }) => value === sortType)?.caption}
          </Styles.SortIconWrapper>
        </Styles.SubFilterWrapper>
      </Styles.StickyBox>
      <Styles.Container>
        <Styles.GenreContents>
          <Styles.CardListWrapper>
            <CardList
              data={cardList}
              loading={isFetchingNextPage || isLoading}
              onClick={clickCard}
            />
          </Styles.CardListWrapper>
          {/* desc : infinite query intersect ref*/}
          <Styles.Trigger ref={setTarget} />
        </Styles.GenreContents>
        {/* desc : 모달 */}
        {/* FIXME : 최초 isDirty true 변경 시 렌더링으로 스크롤 초기화 버그 */}
        <FormProvider {...sortingModalMethods}>
          <SortingModalFrame canClose={false}>
            <SortingModal<SortTypeModalFormValues>
              name={'sortType'}
              list={SORTING_METHOD_LIST_MAP}
              onSubmit={sortingModalMethods.handleSubmit(submitSortingValue)}
              onCancel={cancelSortingModal}
            />
          </SortingModalFrame>
        </FormProvider>
      </Styles.Container>
    </>
  );
};

export default NewGenre;
