import { HTMLAttributes } from 'react';

import * as Styles from './Badge.styles';

interface BadgeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: string;
  colorTheme?: 'green' | 'blue';
}

const Badge = ({ children, colorTheme = 'blue' }: BadgeProps) => {
  return <Styles.Badge $colorTheme={colorTheme}>{children}</Styles.Badge>;
};

export default Badge;
