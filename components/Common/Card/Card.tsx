'use client';

import Image, { ImageProps } from 'next/image';

import Badge from 'components/Common/Badge/Badge';

interface CardProps extends Omit<ImageProps, 'width'> {
  dDay: string;
  title: string;
  place: string;
  period: string;
  price: string;
}

const Card = (props: CardProps) => {
  const { src, alt, dDay, title, place, period, price, ...restProps } = props;

  const containerClass = `flex flex-col w-[195px]`;

  return (
    <div className={containerClass}>
      <Image
        src={src}
        alt={alt}
        width={195}
        height={195 * (3 / 4)}
        style={{ objectFit: 'cover' }}
        className={`mb-4 aspect-w-3 aspect-h-4 rounded-md w-[195px] h-[260px]`}
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
