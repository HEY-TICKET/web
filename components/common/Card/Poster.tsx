import { ComponentProps } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

interface PosterProps extends ComponentProps<typeof Image> {
  isPointer?: boolean;
  scaleUp?: boolean;
}

const Poster = ({ src, width, height, alt, ...rest }: PosterProps) => {
  return (
    <Wrapper width={width} height={height}>
      <CardImage src={src} width={width} height={height} alt={alt} {...rest} />
    </Wrapper>
  );
};

export default Poster;

const Wrapper = styled.div<{ width: number; height: number }>`
  display: flex;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 1px solid ${({ theme }) => theme.COLOR.gray200};
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
