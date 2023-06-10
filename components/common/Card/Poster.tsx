import { ComponentProps } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import STYLES from 'styles/index';

interface PosterProps extends Omit<ComponentProps<typeof Image>, 'width' | 'height'> {
  height?: number;
  scaleUp?: boolean;
  rank?: number;
}

const Poster = ({ src, alt, rank, height, ...rest }: PosterProps) => {
  return (
    <Wrapper height={height}>
      <CardImage src={src} fill alt={alt} priority {...rest} />
      <RankingMark $visible={!!rank}>{rank}</RankingMark>
    </Wrapper>
  );
};

export default Poster;

const Wrapper = styled.div<{ height?: number }>`
  position: relative;
  aspect-ratio: 1 / 1.414;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;

  height: ${({ height }) => `${height}px` ?? '100%'};
`;

const CardImage = styled(Image)`
  height: 100%;
  width: 100%;
  aspect-ratio: 1 / 1.414;
  object-fit: cover;
`;

const RankingMark = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 4px;
  left: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;
  background-color: ${STYLES.color.black};
  opacity: 0.8;

  border-radius: 6px;

  color: ${STYLES.color.white};
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
`;

const DefaultPoster = styled.div<{ width: number; height?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width}px;
  height: ${({ height }) => (height ? `${height}px` : '100%')};

  aspect-ratio: 1 / 1.414;

  color: ${STYLES.color.gray300};

  text-align: center;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 32px;
  white-space: pre-line;
  border-radius: 6px;
  border: 1px solid ${STYLES.color.gray200};
`;

type DefaultImageProps = {
  width: number;
  height?: number;
};

Poster.DefaultImage = ({ width, height }: DefaultImageProps) => {
  return (
    <DefaultPoster width={width} height={height}>
      HEY
      <br />
      TICKET
    </DefaultPoster>
  );
};
