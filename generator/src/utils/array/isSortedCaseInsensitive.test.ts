import {describe, expect, it} from 'vitest';
import {isSortedCaseInsensitive} from './isSortedCaseInsensitive';

describe('isSortedCaseInsensitive', () => {
  it('returns true when array is sorted', () => {
    const sortedArray = ['apple', 'Banana', 'Cherry', 'date'];
    expect(isSortedCaseInsensitive(sortedArray)).toBe(true);
  });

  it('returns false when array is unsorted', () => {
    const unsortedArray = ['apple', 'Cherry', 'Banana', 'date'];
    expect(isSortedCaseInsensitive(unsortedArray)).toBe(false);
  });

  it('returns true when array with non-latin characters is sorted', () => {
    const sortedArray = ['Ångström', 'baroque', 'Ëcho', 'flute', 'Über'];
    expect(isSortedCaseInsensitive(sortedArray)).toBe(true);
  });

  it('returns false when array with non-latin characters is unsorted', () => {
    const unsortedArray = ['baroque', 'Ångström', 'flute'];
    expect(isSortedCaseInsensitive(unsortedArray)).toBe(false);
  });
});
