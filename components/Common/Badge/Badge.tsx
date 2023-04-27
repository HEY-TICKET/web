'use client';

import { HTMLAttributes } from 'react';

interface BadgeProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  children: string;
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <div
      className={`w-fit px-2 py-1 rounded-md bg-blue-100 text-blue-500 text-xs font-bold ${className}`}
    >
      {children}
    </div>
  );
};

export default Badge;
