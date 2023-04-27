'use client';

import Image, { ImageProps } from 'next/image';

interface CardProps extends Omit<ImageProps, 'width'> {
  title: string;
  place: string;
  dDay: string;
  period: string;
  rank?: number;
}

const SimpleCard = (props: CardProps) => {
  const { src, alt, title, place, dDay, period, rank, ...restProps } = props;
  return (
    <div className={`relative flex flex-col gap-2.5 w-[148px]`}>
      <Image
        src={src}
        alt={alt}
        width={148}
        height={148 * (3 / 4)}
        className={'aspect-w-3 aspect-h-4 rounded-md w-[148px] h-[197px]'}
        {...restProps}
      />
      <section className={'flex flex-col gap-1'}>
        <span className={'text-sm text-gray-400 line-clamp-1'}>{place}</span>
        <div className={'mb-1 font-medium line-clamp-2'}>{title}</div>
        <div className={'flex gap-1'}>
          <span className={'text-sm text-blue-600'}>{dDay}</span>
          <span className={'text-sm text-gray-400 line-clamp-1'}>{period}</span>
        </div>
      </section>
      <section
        className={`${
          rank ? 'flex' : 'hidden'
        } absolute top-1 left-1 flex items-center justify-center w-6 h-6 rounded-md text-white text-sm font-bold bg-black bg-opacity-80`}
      >
        {rank}
      </section>
    </div>
  );
};

export default SimpleCard;
