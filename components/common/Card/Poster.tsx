import { ComponentProps } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

import STYLES from 'styles/index';

interface PosterProps extends ComponentProps<typeof Image> {
  scaleUp?: boolean;
  width?: number;
  rank?: number;
}

const Poster = ({ src, alt, width = 195, rank, ...rest }: PosterProps) => {
  return (
    <Wrapper>
      <CardImage src={src} width={width} height={0} alt={alt} {...rest} />
      <RankingMark $visible={!!rank}>{rank}</RankingMark>
    </Wrapper>
  );
};

export default Poster;

const Wrapper = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
`;

const CardImage = styled(Image)`
  height: 100%;
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
