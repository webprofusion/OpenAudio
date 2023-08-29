import {describe, expect} from 'vitest';
import {isSortedCaseInsensitive} from '../utils/array/isSortedCaseInsensitive';
import {samples} from './samples';

describe('samples', (they) => {
  they('are sorted by name', () => {
    const names = samples.map((sample) => sample.name);
    expect(isSortedCaseInsensitive(names)).toBe(true);
  });
});
