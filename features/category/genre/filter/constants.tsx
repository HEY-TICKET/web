import { ReactNode } from 'react';

import Price from 'features/category/genre/filter/price/Price';
import Region from 'features/category/genre/filter/region/Region';
import Schedule from 'features/category/genre/filter/schedule/Schedule';
import Status from 'features/category/genre/filter/status/Status';

export const FILTER_MODAL_TAB_ITEM_LIST: { title: string; component: ReactNode }[] = [
  { title: '지역', component: <Region name={'region'} /> },
  {
    title: '공연일',
    component: <Schedule name={'date'} />,
  },
  {
    title: '진행 상태',
    component: <Status name={'status'} />,
  },
  {
    title: '예매 가격',
    component: <Price name={'price'} />,
  },
];
