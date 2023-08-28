import {describe, expect} from 'vitest';
import {isSortedCaseInsensitive} from '../utils/array/isSortedCaseInsensitive';
import {collections} from './collections';

describe('collections', (they) => {
  they('are sorted by name', () => {
    const names = collections.map((collection) => collection.name);
    expect(isSortedCaseInsensitive(names)).toBe(true);
  });
});
