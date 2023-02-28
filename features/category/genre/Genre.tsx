'use client';
import { useState } from 'react';

import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import Chip from 'components/common/Chip/Chip';
import CardList from 'features/category/genre/CardList';
import { FILTER_MODAL_TAB_ITEM_LIST } from 'features/category/genre/filter/constants';
import * as Styles from 'features/category/genre/Genre.styles';
import CategoryFilterModal, {
  FILTER_MODAL_DEFAULT_VALUES,
  FilterModalFormValues,
} from 'features/category/modal/CategoryFilterModal';
import SortingModal, {
  SortingModalFormValues,
  SORTING_MODAL_DEFAULT_VALUES,
} from 'features/category/modal/SortingModal';
import useModal from 'hooks/useModal';
import useTab from 'hooks/useTab';
import { ArrowRight, FilterIcon, SortIcon } from 'styles/icons';
import { getDayOfWeek } from 'utils/times';

interface GenreProps {
  title: string;
}

const FILTER_VALUE_MAP = {
  region: '지역',
  date: '공연일',
  status: '진행 상태',
  price: '가격',
};

const getText = (
  value: (typeof FILTER_MODAL_DEFAULT_VALUES)[keyof typeof FILTER_MODAL_DEFAULT_VALUES],
  name: keyof typeof FILTER_MODAL_DEFAULT_VALUES,
) => {
  if (JSON.stringify(value) === JSON.stringify(FILTER_MODAL_DEFAULT_VALUES[name]))
    return FILTER_VALUE_MAP[name];
  if (Array.isArray(value)) {
    return value.length === 1 ? `${value[0]}` : `${FILTER_VALUE_MAP[name]} ${value.length}`;
  } else {
    if (value instanceof Date) {
      return `${dayjs(value).format('YYYY.MM.DD')} (${getDayOfWeek(value, 'ko')})`;
    }
    return value;
  }
};

const Genre = ({ title }: GenreProps) => {
  const [currentSorting, setCurrentSorting] = useState(SORTING_MODAL_DEFAULT_VALUES['sorting']);
  const [chipValues, setChipValues] = useState(FILTER_MODAL_DEFAULT_VALUES);

  const { TabMenu, setCurrent } = useTab({ tabList: FILTER_MODAL_TAB_ITEM_LIST });
  const { back } = useRouter();
  const { Modal: FilterModalFrame, open: filterModalOpen } = useModal();
  const { Modal: SortingModalFrame, open: sortingModalOpen } = useModal();

  const filterModalMethods = useForm<FilterModalFormValues>({
    mode: 'onSubmit',
    defaultValues: FILTER_MODAL_DEFAULT_VALUES,
  });

  const sortingModalMethods = useForm<SortingModalFormValues>({
    mode: 'onSubmit',
    defaultValues: SORTING_MODAL_DEFAULT_VALUES,
  });

  const submitFilterValue = (data: FilterModalFormValues) => {
    console.log(data['date']);
    console.log(FILTER_MODAL_DEFAULT_VALUES['date']);
    setChipValues(data);
  };

  const submitSortingValue = (data: SortingModalFormValues) => {
    console.log(data);
    setCurrentSorting(data.sorting);
  };

  const goToBack = () => back();

  const clickChip = (index: number) => {
    setCurrent(index);
    filterModalOpen();
  };

  const closeChip = (name: keyof typeof FILTER_MODAL_DEFAULT_VALUES) => {
    console.log('onClick');
    filterModalMethods.resetField(name);
    setChipValues((prev) => ({ ...prev, [name]: FILTER_MODAL_DEFAULT_VALUES[name] }));
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
              {Object.entries(chipValues).map(([key, value], index) => {
                const name = key as keyof typeof FILTER_VALUE_MAP;
                const text = getText(value, name).toString();
                const active =
                  JSON.stringify(value) !== JSON.stringify(FILTER_MODAL_DEFAULT_VALUES[name]);
                return (
                  <Chip
                    key={key}
                    text={text}
                    active={active}
                    onClick={() => clickChip(index)}
                    onClose={() => closeChip(name)}
                  />
                );
              })}
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
          <CardList />
        </Styles.CardListWrapper>
      </Styles.GenreContents>
      {/* desc : 모달 */}
      {/* FIXME : 최초 isDirty true 변경 시 렌더링으로 스크롤 초기화 버그 */}
      <FilterModalFrame canClose={false}>
        <CategoryFilterModal
          methods={filterModalMethods}
          TabMenu={TabMenu}
          onSubmit={submitFilterValue}
        />
      </FilterModalFrame>
      <SortingModalFrame canClose={false}>
        <SortingModal methods={sortingModalMethods} onSubmit={submitSortingValue} />
      </SortingModalFrame>
    </Styles.Container>
  );
};

export default Genre;
