'use client';

import React, { useCallback, useState } from 'react';

import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

import Chip from 'components/common/Chip/Chip';
import {
  AREA,
  GENRE,
  PERFORMANCE_GENRE_MAP,
  TIME_PERIOD,
  TIME_PERIOD_MAP,
} from 'constants/new/performance';
import { ROUTES } from 'constants/routes';
import CardList from 'features/category/genre/CardList';
import * as Styles from 'features/category/genre/Genre.styles';
import SortingModal from 'features/category/modal/SortingModal';
import useCustomToast from 'hooks/useCustomToast';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useModal from 'hooks/useModal';
import { useInfiniteRankPerformanceQuery } from 'reactQuery/performance';
import { ArrowRight, SortIcon } from 'styles/icons';

interface GenreProps {
  genre: keyof typeof GENRE;
}

interface SortTypeModalFormValues {
  timePeriod: keyof typeof TIME_PERIOD;
}

const PERFORMANCE_RANK_GENRE_MAP = PERFORMANCE_GENRE_MAP;

const INITIAL_TIME_PERIOD: keyof typeof TIME_PERIOD = 'DAY';

const RankGenre = ({ genre }: GenreProps) => {
  const { replace, push, back } = useRouter();
  const toast = useCustomToast();

  const [prevSortTypeValues, setPrevSortTypeValues] = useState<keyof typeof TIME_PERIOD | null>(
    INITIAL_TIME_PERIOD,
  );

  // TODO : setArea 설정
  const [area] = useState<keyof typeof AREA>('ALL');

  const [timePeriod, setTimePeriod] = useState<keyof typeof TIME_PERIOD>(INITIAL_TIME_PERIOD);

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteRankPerformanceQuery({
      page: 0,
      pageSize: 24,
      genre: genre,
      area: area,
      timePeriod: timePeriod,
    });

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

  const sortingModalMethods = useForm<SortTypeModalFormValues>({
    mode: 'onTouched',
    defaultValues: { timePeriod: TIME_PERIOD.DAY },
  });

  const {
    Modal: SortingModalFrame,
    open: sortingModalOpen,
    close: sortingModalClose,
  } = useModal(
    () => setPrevSortTypeValues(sortingModalMethods.getValues('timePeriod')),
    () => setPrevSortTypeValues(null),
  );

  const submitSortingValue = (data: SortTypeModalFormValues) => {
    // TODO : 데이터 submit
    setTimePeriod(data.timePeriod);
    toast('필터가 적용되었습니다');
    sortingModalClose();
  };

  const clickCard = (id: string) => {
    push(`${ROUTES.category}/${genre}/${id}`);
  };

  const clickChip = (genre: (typeof PERFORMANCE_RANK_GENRE_MAP)[number]['value']) => {
    replace(`/category/${genre}?new=true`);
  };

  const cancelSortingModal = () => {
    prevSortTypeValues && sortingModalMethods.reset({ timePeriod: prevSortTypeValues });
  };

  return (
    <>
      <Styles.StickyBox>
        <Styles.GenreHeader>
          <Styles.LeftIconWrapper onClick={back}>
            <ArrowRight size={28} />
          </Styles.LeftIconWrapper>
          <Styles.Title>공연 랭킹</Styles.Title>
        </Styles.GenreHeader>
        <Styles.FilterContainer>
          <Styles.FilterWrapper>
            {PERFORMANCE_RANK_GENRE_MAP.map(({ caption, value }, index) => (
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
            {TIME_PERIOD_MAP.find(({ value }) => value === timePeriod)?.caption}
          </Styles.SortIconWrapper>
        </Styles.SubFilterWrapper>
      </Styles.StickyBox>
      <Styles.Container>
        <Styles.GenreContents>
          <Styles.CardListWrapper>
            <CardList
              data={
                //FIXME : react-query api 교체 하면서 해당 부분도 체크
                data?.pages.map((response) => response.contents).flat() ?? []
              }
              loading={isFetchingNextPage || isLoading}
              onClick={clickCard}
              hasRank
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
              name={'timePeriod'}
              list={TIME_PERIOD_MAP}
              onSubmit={sortingModalMethods.handleSubmit(submitSortingValue)}
              onCancel={cancelSortingModal}
            />
          </SortingModalFrame>
        </FormProvider>
      </Styles.Container>
    </>
  );
};

export default RankGenre;
