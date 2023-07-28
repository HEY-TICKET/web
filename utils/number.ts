export const clamp = (num: number, min: number, max: number): number =>
  Math.min(Math.max(num, min), max);

export const addComma = (value: number | string): string => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  return value.toString().replace(regexp, ',') || '';
};

export const getMinMax = (args: number[]): { min: number; max: number } => {
  const min = Math.min(...args);
  const max = Math.max(...args);

  return { min, max };
};
