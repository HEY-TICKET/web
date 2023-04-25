'use client';

import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';

import Logo from 'features/Index/Logo';

const NavigationBar = () => {
  return (
    <div className={'flex justify-between h-9.5 px-4 py-3'}>
      <Logo />
      <div className={'flex items-center gap-x-2'}>
        <MagnifyingGlassIcon className={'h-6 w-6'} />
        <BellIcon className={'h-6 w-6'} />
      </div>
    </div>
  );
};

export default NavigationBar;
