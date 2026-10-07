export const sortByNameCaseInsensitive = <T extends {name: string}>(
  array: T[],
): T[] =>
  [...array].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, {sensitivity: 'accent'}),
  );
