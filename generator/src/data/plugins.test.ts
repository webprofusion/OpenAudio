import {describe, expect} from 'vitest';
import {plugins} from './plugins';
import {isSortedCaseInsensitive} from '../utils/array/isSortedCaseInsensitive';

describe('plugins', (they) => {
  they('are sorted by name', () => {
    const names = plugins.map((plugin) => plugin.name);
    expect(isSortedCaseInsensitive(names)).toBe(true);
  });
});
