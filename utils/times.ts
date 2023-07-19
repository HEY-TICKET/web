import dayjs from 'dayjs';

import { DAY_OF_WEEK } from 'constants/date';
import { StatusTypes } from 'types/performance';

type DateProps = string | number | Date;

type Language = 'en' | 'ko';

export const getDayOfWeek = (date: DateProps, lan: Language = 'en') => {
  const dayOfWeek = dayjs(date).format('ddd') as keyof typeof DAY_OF_WEEK;
  return lan === 'en' ? dayOfWeek : DAY_OF_WEEK[dayOfWeek];
};

export const getPeriod = (startDate: DateProps, endDate: DateProps) => {
  const _startDate = `${startDate}(${getDayOfWeek(startDate, 'ko')})`;
  const _endDate = `${endDate}(${getDayOfWeek(endDate, 'ko')})`;
  return _startDate === _endDate ? _endDate : `${_startDate} ~ ${_endDate}`;
};

export const convertor = (date: Date, format: string) => dayjs(date).format(format);

export const performanceStatus = (startDate: DateProps, endDate: DateProps): StatusTypes => {
  const today = dayjs(new Date()).format('YYYY-MM-DD');

  if (today < startDate) return 'UPCOMING';
  else if (today >= startDate && today <= endDate) return 'ONGOING';
  else return 'COMPLETED';
};

export const getDday = (startDate: DateProps) => {
  const today = dayjs(new Date()).format('YYYY-MM-DD');
  const diffDate = new Date(startDate).getTime() - new Date(today).getTime();
  const day = diffDate / (1000 * 60 * 60 * 24); // 밀리세컨 * 초 * 분 * 시 = 일
  return `D-${day}`;
};
