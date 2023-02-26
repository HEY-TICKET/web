import dayjs from 'dayjs';

import { DAY_OF_WEEK } from 'constants/date';

type DateProps = string | number | Date;

type Language = 'en' | 'ko';

export const getDateDiff = (d1: DateProps, d2: DateProps) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const diffDate = date1.getTime() - date2.getTime();

  return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
};

export const getDayOfWeek = (date: DateProps, lan: Language = 'en') => {
  const dayOfWeek = dayjs(date).format('ddd') as keyof typeof DAY_OF_WEEK;
  return lan === 'en' ? dayOfWeek : DAY_OF_WEEK[dayOfWeek];
};
