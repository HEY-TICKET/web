'use client';

import { HTMLAttributes, useEffect, useRef, useState } from 'react';

import { ArrowRight } from 'styles/icons';

import * as Styles from './Slider.styles';

interface Props extends HTMLAttributes<HTMLElement> {
  skipSize?: number;
  duration?: number;
  durationUnit?: 's' | 'ms';
  sliderWidth: number;
}

const Slider = ({
  children,
  skipSize = 1,
  duration = 500,
  durationUnit = 'ms',
  sliderWidth,
}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clientX, setClientX] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const currentRef = ref.current;

  const clickPrevButton = () => {
    if (currentIndex - skipSize >= 0) setCurrentIndex(currentIndex - skipSize);
  };

  const clickNextButton = () => {
    const isMax = currentIndex >= clientX.length - 3;
    if (isMax) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + skipSize);
  };

  useEffect(() => {
    if (currentRef) {
      const list = Array.from(currentRef.children);
      if (list.length) {
        const xList = list.map((child) => child.getBoundingClientRect().x);
        setClientX(xList);
      }
    }
  }, [currentRef]);

  if (!skipSize) return <></>;

  return (
    <Styles.Wrapper>
      <Styles.PrevButton onClick={clickPrevButton}>
        <ArrowRight size={20} />
      </Styles.PrevButton>
      <Styles.ChildrenWrapper
        $duration={duration + durationUnit}
        $clientX={clientX[currentIndex] - clientX[0]}
        $sliderWidth={sliderWidth + 'px'}
        ref={ref}
      >
        {children}
      </Styles.ChildrenWrapper>
      <Styles.NextButton onClick={clickNextButton}>
        <ArrowRight size={20} />
      </Styles.NextButton>
    </Styles.Wrapper>
  );
};

export default Slider;
