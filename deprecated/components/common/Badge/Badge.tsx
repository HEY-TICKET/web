import { HTMLAttributes } from 'react';

import { COLOR } from 'deprecated/styles/colors';

import * as Styles from './Badge.styles';

interface BadgeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: string;
  colorTheme?: keyof typeof COLOR;
}

const Badge = ({ children, colorTheme = 'gray400' }: BadgeProps) => {
  return <Styles.Badge $colorTheme={colorTheme}>{children}</Styles.Badge>;
};

export default Badge;
