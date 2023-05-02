'use client';

import { Children, HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

import { ArrowRight } from 'styles/icons';

import * as Styles from './Slider.styles';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  children: ReactNode;
  skipSize?: number;
  duration?: number;
  viewedItemCount: number;
}

const Slider = ({ children, skipSize = 1, duration = 500, viewedItemCount }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clientX, setClientX] = useState<number[]>([]);
  const ref = useRef<HTMLUListElement>(null);
  const clickPrevButton = () => {
    if (currentIndex - skipSize >= 0) setCurrentIndex(currentIndex - skipSize);
  };

  const clickNextButton = () => {
    const isMax = currentIndex >= clientX.length - viewedItemCount;
    if (isMax) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + skipSize);
  };

  useEffect(() => {
    if (ref.current) {
      const list = Array.from(ref.current.children);
      if (list.length) {
        const xList = list.map((child) => child.getBoundingClientRect().x);
        setClientX(xList);
      }
    }
  }, [children]);

  if (!skipSize) return <></>;

  return (
    <Styles.Wrapper>
      <Styles.PrevButton $clickable={currentIndex !== 0} onClick={clickPrevButton}>
        <ArrowRight size={20} />
      </Styles.PrevButton>
      <Styles.ContentsWrapper>
        <Styles.Contents
          ref={ref}
          $duration={duration}
          $clientX={clientX[currentIndex] - clientX[0]}
        >
          {Children.map(children, (child, idx) => (
            <Styles.Item key={idx}>{child}</Styles.Item>
          ))}
        </Styles.Contents>
      </Styles.ContentsWrapper>
      <Styles.NextButton onClick={clickNextButton}>
        <ArrowRight size={20} />
      </Styles.NextButton>
    </Styles.Wrapper>
  );
};

export default Slider;
