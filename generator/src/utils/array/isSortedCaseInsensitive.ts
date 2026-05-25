export const isSortedCaseInsensitive = (array: string[]): boolean => {
  const arraySorted = [...array].sort((a, b) =>
    a.localeCompare(b, undefined, {sensitivity: 'accent'}),
  );
  return array.every((value, index) => value === arraySorted[index]);
};
