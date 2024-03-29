'use client';

import { useEffect, useState } from 'react';

export type UseCountDownReturnType = {
  leftTime: string;
  play: () => void;
  pause: () => void;
  reset: () => void;
  timeOver: boolean;
};

const useCountDown = (autoPlay?: boolean, initTimeSecond?: number): UseCountDownReturnType => {
  const [time, setTime] = useState(initTimeSecond ?? 300);
  const [isPlaying, setIsPlaying] = useState(autoPlay ?? true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPlaying) return;
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          setIsPlaying(false);
          return 0;
        } else return time - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isPlaying]);

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);
  const reset = () => {
    setTime(initTimeSecond ?? 300);
    setIsPlaying(true);
  };

  const minute = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');

  const second = (time % 60).toString().padStart(2, '0');

  const leftTime = `${minute}:${second}`;

  return { leftTime, play, pause, reset, timeOver: time === 0 };
};

export default useCountDown;
