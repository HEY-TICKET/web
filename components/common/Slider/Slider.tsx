'use client';

import { Children, HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

import { ArrowRight } from 'styles/icons';

import * as Styles from './Slider.styles';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  children: ReactNode;
  skipSize?: number;
  duration?: number;
}

const Slider = ({ children, skipSize = 1, duration = 500 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clientX, setClientX] = useState<number[]>([]);
  const [numberOfItemsIncludes, setNumberOfItemsIncludes] = useState(0);
  const ref = useRef<HTMLUListElement>(null);
  const clickPrevButton = () => {
    if (currentIndex - skipSize >= 0) setCurrentIndex(currentIndex - skipSize);
  };

  const clickNextButton = () => {
    console.log(numberOfItemsIncludes);
    const isMax = currentIndex >= clientX.length - numberOfItemsIncludes;
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

      const firstChildClientX = ref.current.children[0]?.getBoundingClientRect().x ?? 1;
      const containerClientWidth = ref.current.getBoundingClientRect().width ?? 1;
      const numberOfItemsIncludes = Math.floor(containerClientWidth / firstChildClientX);
      setNumberOfItemsIncludes(numberOfItemsIncludes);
    }
  }, [children]);

  if (!skipSize) return <></>;

  return (
    <Styles.Wrapper>
      <Styles.PrevButton onClick={clickPrevButton}>
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
