'use client';

import { HomeIcon, Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const param = useParams();

  return (
    <div className={'flex items-center justify-around h-16 border-t border-gray-100 '}>
      <Footer.IconLink href={'/'} Icon={HomeIcon} title={'홈'} active={pathname === '/'} />
      <Footer.IconLink
        href={'/performance'}
        Icon={Bars3Icon}
        title={'카테고리'}
        active={!!param.category}
      />
      <Footer.IconLink
        href={'/my'}
        Icon={UserCircleIcon}
        title={'마이'}
        active={pathname === '/my'}
      />
    </div>
  );
};

export default Footer;

type IconLinkProps = {
  href: string;
  active: boolean;
  Icon: typeof HomeIcon | typeof Bars3Icon | typeof UserCircleIcon;
  title: string;
};

Footer.IconLink = ({ href, active, Icon, title }: IconLinkProps) => {
  return (
    <Link href={href}>
      <button className={'flex flex-col items-center w-12'}>
        <Icon className={`w-7 h-7 ${active ? 'text-black' : 'text-gray-300'}`} />
        <span className={`text-xs ${active ? 'text-black' : 'text-gray-400'}`}>{title}</span>
      </button>
    </Link>
  );
};
