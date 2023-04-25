import { ButtonHTMLAttributes } from 'react';

import * as Styles from './Button.styles';
import { ColorTheme, Size } from './types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorTheme?: ColorTheme;
  size?: Size;
  width?: number;
  height?: number;
}

const Button = ({
  children,
  colorTheme = 'dark',
  size = 'md',
  width,
  height,
  ...restProps
}: ButtonProps) => {
  return (
    <Styles.Button
      $colorTheme={colorTheme}
      $size={size}
      $width={width}
      $height={height}
      {...restProps}
    >
      {children}
    </Styles.Button>
  );
};

export default Button;
