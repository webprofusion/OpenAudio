import {describe, expect, it} from 'vitest';
import {sortByNameCaseInsensitive} from './sortByNameCaseInsensitive';

const names = (array: Array<{name: string}>) => array.map(({name}) => name);
const items = (array: string[]) => array.map((name) => ({name}));

describe('sortByNameCaseInsensitive', () => {
  it('sorts by name ignoring case', () => {
    const result = sortByNameCaseInsensitive(
      items(['date', 'Cherry', 'apple', 'Banana']),
    );
    expect(names(result)).toEqual(['apple', 'Banana', 'Cherry', 'date']);
  });

  it('sorts names with non-latin characters', () => {
    const result = sortByNameCaseInsensitive(
      items(['Über', 'flute', 'Ëcho', 'baroque', 'Ångström']),
    );
    expect(names(result)).toEqual([
      'Ångström',
      'baroque',
      'Ëcho',
      'flute',
      'Über',
    ]);
  });

  it('keeps the original order of items with equal names', () => {
    const result = sortByNameCaseInsensitive([
      {name: 'b', id: 1},
      {name: 'a', id: 2},
      {name: 'B', id: 3},
    ]);
    expect(result.map(({id}) => id)).toEqual([2, 1, 3]);
  });

  it('does not modify the input array', () => {
    const input = items(['b', 'a']);
    sortByNameCaseInsensitive(input);
    expect(names(input)).toEqual(['b', 'a']);
  });
});
