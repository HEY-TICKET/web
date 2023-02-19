import * as Styles from './Badge.styles';
import { HTMLAttributes } from 'react';

interface BadgeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: string;
  colorTheme?: 'green' | 'blue';
}

const Badge = ({ children, colorTheme = 'blue' }: BadgeProps) => {
  return <Styles.Badge $colorTheme={colorTheme}>{children}</Styles.Badge>;
};

export default Badge;
