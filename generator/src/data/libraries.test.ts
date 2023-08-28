import {describe, expect} from 'vitest';
import {isSortedCaseInsensitive} from '../utils/array/isSortedCaseInsensitive';
import {libraries} from './libraries';

describe('libraries', (they) => {
  they('are sorted by name', () => {
    const names = libraries.map((library) => library.name);
    expect(isSortedCaseInsensitive(names)).toBe(true);
  });
});
