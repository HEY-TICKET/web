export const removeEmpty = <T>(arr: T[] | undefined): T[] => {
  if (!arr) return [];
  return arr.reduce((prev: T[], current) => {
    if (current) return [...prev, current];
    return [...prev];
  }, []);
};
