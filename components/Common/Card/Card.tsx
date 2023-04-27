'use client';

import Image, { ImageProps } from 'next/image';

import Badge from 'components/Common/Badge/Badge';

interface CardProps extends Omit<ImageProps, 'width'> {
  width: number;
  dDay: string;
  title: string;
  place: string;
  period: string;
  price: string;
}

const Card = (props: CardProps) => {
  const { src, alt, width, dDay, title, place, period, price, ...restProps } = props;
  return (
    <div className={`flex flex-col max-w-[${width}px]`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={(width / 9) * 16}
        className={'mb-4 aspect-w-9 aspect-h-16  rounded-md'}
        {...restProps}
      />
      <section className={'min-h-[124px] mb-6'}>
        <Badge className={'mb-2'}>{dDay}</Badge>
        <div className={'mb-1 font-medium line-clamp-2'}>{title}</div>
        <span className={'text-sm text-gray-400 line-clamp-1'}>{place}</span>
        <span className={'text-sm text-gray-400 line-clamp-1'}>{period}</span>
      </section>
      <section className={'flex flex-col flex-1'}>
        <span className={'text-xs text-gray-600 font-medium'}>예매가</span>
        <span className={'line-clamp-1'}>{price}</span>
      </section>
    </div>
  );
};

export default Card;
