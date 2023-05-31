'use client';

import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  Children,
  useCallback,
  useMemo,
  useRef,
  useState,
  isValidElement,
} from 'react';

import styled from 'styled-components';

import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { ArrowRight } from 'styles/icons';
import STYLES from 'styles/index';
import { clamp } from 'utils/number';

interface CardSliderProps extends HTMLAttributes<HTMLElement> {
  skipCount?: number;
  fallback?: JSX.Element;
}

const Slider = ({ children, skipCount = 1, fallback }: CardSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const onIntersect: IntersectionObserverCallback = useCallback(async ([{ isIntersecting }]) => {
    setIsEnd(isIntersecting);
  }, []);
  const { setTarget } = useIntersectionObserver({ onIntersect, threshold: 1 });

  const ref = useRef<(HTMLLIElement | null)[]>([]);

  const maxIndex = Children.toArray(children).length - 1;

  const clientX = useMemo(
    () =>
      (ref.current[currentIndex]?.getBoundingClientRect().x ?? 0) -
      (ref.current[0]?.getBoundingClientRect().x ?? 0),
    [currentIndex, ref],
  );

  const prev = useCallback(() => {
    setCurrentIndex((prev) => {
      return clamp(prev - skipCount, 0, maxIndex);
    });
  }, [maxIndex, skipCount]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => {
      return isEnd || prev === maxIndex ? 0 : clamp(prev + skipCount, 0, maxIndex);
    });
  }, [isEnd, maxIndex, skipCount]);

  if (isValidElement(fallback) && Children.toArray(children).length === 0) {
    return fallback;
  }

  return (
    <SliderWrap>
      <Slider.PrevButton onClick={prev} />
      <Container>
        <Wrap clientX={clientX}>
          {Children.map(children, (child, i) => (
            <li
              key={i}
              ref={(element) => {
                ref.current[i] = element;
                if (i === maxIndex) {
                  setTarget(element);
                }
              }}
            >
              {child}
            </li>
          ))}
        </Wrap>
      </Container>
      <Slider.NextButton onClick={next} />
    </SliderWrap>
  );
};

export default Slider;

const Container = styled.div`
  overflow: hidden;
`;

const Wrap = styled.div<{ clientX: number }>`
  display: flex;
  column-gap: 16px;

  transform: translateX(${({ clientX }) => -clientX}px);
  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
`;

const SliderWrap = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 6px;
  border-radius: 50%;
  filter: drop-shadow(0px 0px 4.57143px rgba(0, 0, 0, 0.2));
  background-color: ${STYLES.color.white};
  z-index: 1;
`;

const NextButton = styled(Button)`
  right: 0;
`;
const PrevButton = styled(Button)`
  left: 0;
  & > svg {
    transform: rotate(-180deg);
  }
`;

Slider.PrevButton = function CardSliderPrevButton({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <PrevButton {...rest}>
      <ArrowRight size={20} />
    </PrevButton>
  );
};
Slider.NextButton = function CardSliderNextButton({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <NextButton {...rest}>
      <ArrowRight size={20} />
    </NextButton>
  );
};
