import dayjs from 'dayjs';

import Chip from 'components/common/Chip/Chip';
import { AREA_LIST_MAP, PRICE_LIST, STATUS_LIST_MAP } from 'constants/performance/common';
import {
  FILTER_MODAL_DEFAULT_VALUES,
  FilterModalFormValues,
} from 'features/category/modal/CategoryFilterModal';
import { AreaTypes, StatusTypes } from 'types/performance';
import { getDayOfWeek } from 'utils/times';

interface FilterChipsProps {
  chipValues: FilterModalFormValues;
  clickChip: (index: number) => void;
  closeChip: (name: keyof typeof FILTER_MODAL_DEFAULT_VALUES) => void;
}

const FilterChips = ({ chipValues, clickChip, closeChip }: FilterChipsProps) => {
  return (
    <>
      {Object.entries(chipValues).map(([key, value], index) => {
        const name = key as keyof typeof FILTER_VALUE_MAP;
        const text = getText(value, name)?.toString() ?? '';
        const active = JSON.stringify(value) !== JSON.stringify(FILTER_MODAL_DEFAULT_VALUES[name]);
        return (
          <Chip
            key={key}
            text={text}
            active={active}
            onClick={() => clickChip(index)}
            onClose={() => closeChip(name)}
            closable={active}
          />
        );
      })}
    </>
  );
};

export default FilterChips;

export const FILTER_VALUE_MAP = {
  areas: '지역',
  date: '공연일',
  status: '진행 상태',
  price: '가격',
};

const getText = (
  value: (typeof FILTER_MODAL_DEFAULT_VALUES)[keyof typeof FILTER_MODAL_DEFAULT_VALUES],
  name: keyof typeof FILTER_MODAL_DEFAULT_VALUES,
) => {
  if (JSON.stringify(value) === JSON.stringify(FILTER_MODAL_DEFAULT_VALUES[name])) {
    return FILTER_VALUE_MAP[name];
  }

  if (name === 'areas') {
    const areas = value as AreaTypes[];
    if (areas.length === 1) {
      const selectedAreasCaptions = AREA_LIST_MAP.filter(({ value }) => areas.includes(value));
      return selectedAreasCaptions[0].caption;
    } else {
      return `${FILTER_VALUE_MAP[name]} ${areas.length}`;
    }
  }
  if (name === 'date') {
    return `${dayjs(value as Date).format('YYYY.MM.DD')} (${getDayOfWeek(value as Date, 'ko')})`;
  }
  if (name === 'status') {
    const status = value as StatusTypes[];
    const selectedStatusCaptions = STATUS_LIST_MAP.filter(({ value }) =>
      status.includes(value),
    ).map(({ caption }) => caption);
    return selectedStatusCaptions.join(', ');
  }
  if (name === 'price') {
    const selectedPrice = value;

    return PRICE_LIST.filter(({ value }) => JSON.stringify(value) === selectedPrice)[0].caption;
  }
};
