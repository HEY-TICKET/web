'use client';

import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import Logo from 'features/Index/Logo';

const NavigationBar = () => {
  return (
    <div className={'flex justify-between h-9.5 px-4 py-3'}>
      <Link href={'/'}>
        <Logo />
      </Link>
      <div className={'flex items-center gap-x-1'}>
        <Link href={'/search'}>
          <button className={'p-1.5'}>
            <MagnifyingGlassIcon className={'h-6 w-6'} />
          </button>
        </Link>
        <button className={'p-1.5'}>
          <BellIcon className={'h-6 w-6'} />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
