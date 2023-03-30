import { ComponentProps } from 'react';

import Image from 'next/image';
import styled, { css } from 'styled-components';

type PosterProps = ComponentProps<typeof Image>;

const Poster = ({ src, width, height, alt, ...rest }: PosterProps) => {
  return (
    <CardImageWrapper width={width} height={height}>
      <CardImage src={src} width={width} height={height} alt={alt} {...rest} />
    </CardImageWrapper>
  );
};

export default Poster;

export const CardImageWrapper = styled.div<{ width: number; height: number }>`
  border-radius: 4px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  overflow: hidden;
`;

export const CardImage = styled(Image)`
  border-radius: 4px;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }

  ${({ theme }) => css`
    ${theme.MEDIA.mobilePortrait} {
      width: 108px;
      height: 152px;
      margin: 0;
    }
  `}
`;
