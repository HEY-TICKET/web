import dayjs from 'dayjs';

import Chip from 'components/common/Chip/Chip';
import {
  FILTER_MODAL_DEFAULT_VALUES,
  FilterModalFormValues,
} from 'features/category/modal/CategoryFilterModal';
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
  region: '지역',
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

  if (name === 'region') {
    const region = value as string[];
    return region.length === 1 ? `${region[0]}` : `${FILTER_VALUE_MAP[name]} ${region.length}`;
  }
  if (name === 'date') {
    return `${dayjs(value as Date).format('YYYY.MM.DD')} (${getDayOfWeek(value as Date, 'ko')})`;
  }
  if (name === 'status') {
    const status = value as string[];
    return status.join(', ');
  }
  if (name === 'price') {
    return value;
  }
};
