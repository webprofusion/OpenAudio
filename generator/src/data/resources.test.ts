import {describe, expect} from 'vitest';
import {isSortedCaseInsensitive} from '../utils/array/isSortedCaseInsensitive';
import {resources} from './resources';

describe('resources', (they) => {
  they('are sorted by name', () => {
    const names = resources.map((resource) => resource.name);
    expect(isSortedCaseInsensitive(names)).toBe(true);
  });
});
