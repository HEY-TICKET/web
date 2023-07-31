export const getArrayPrice = (price: string | null) => {
  if (!price) return ['-'];
  if (price.includes('전석')) return [price];
  return price.replaceAll('원,', '원#').split('#');
};

export const getArrayPerformanceTime = (time: string) => {
  if (!time.includes('),')) return [time];
  return time.replaceAll('),', ')#').split('#');
};
