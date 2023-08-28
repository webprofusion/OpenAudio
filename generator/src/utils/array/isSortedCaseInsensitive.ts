export const isSortedCaseInsensitive = (array: string[]): boolean => {
  const arraySorted = [...array].sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase()),
  );
  return array.every((value, index) => value === arraySorted[index]);
};
