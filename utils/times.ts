import dayjs from 'dayjs';

import { DAY_OF_WEEK } from 'constants/date';

type DateProps = string | number | Date;

type Language = 'en' | 'ko';

export const getDateDiff = (date: DateProps, otherDate?: DateProps) => {
  const _date = new Date(date);
  const _otherDate = otherDate ? new Date(otherDate) : new Date();

  const diffDate = _date.getTime() - _otherDate.getTime();

  return diffDate / (1000 * 60 * 60 * 24); // 밀리세컨 * 초 * 분 * 시 = 일
};

export const getDayOfWeek = (date: DateProps, lan: Language = 'en') => {
  const dayOfWeek = dayjs(date).format('ddd') as keyof typeof DAY_OF_WEEK;
  return lan === 'en' ? dayOfWeek : DAY_OF_WEEK[dayOfWeek];
};

export const getPeriod = (startDate: Date | string, endDate: Date | string) => {
  const _startDate = `${startDate}(${getDayOfWeek(startDate, 'ko')})`;
  const _endDate = `${endDate}(${getDayOfWeek(endDate, 'ko')})`;
  return _startDate === _endDate ? _endDate : `${_startDate} ~ ${_endDate}`;
};
